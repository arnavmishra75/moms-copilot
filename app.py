from flask import Flask, request, render_template
from markupsafe import escape

from torchtext import data
import torch

import random
import json
import redis
import requests
from youtube_transcript_api import YouTubeTranscriptApi
import numpy as np
import spacy
import torch.nn as nn
#from __future__ import unicode_literals

from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

myRedis = redis.Redis(host='localhost', port=6379, db=0)

#import en_core_web_sm
#nlp = spacy.load('en_core_web_md')
nlp = None

#SENTENCE = embedding()

print("Started doing the embedding and model")
MAX_VOCAB_SIZE = 25_000
SEED = 1234
BATCH_SIZE = 5
SENTENCE = data.Field(tokenize='spacy', include_lengths=True)
CENSOR = data.LabelField()

train_data, test_data = data.TabularDataset.splits(path='/Users/admin/Downloads/',
                                                train='verystrict_data.json',
                                                test='verystrict_data.json',
                                                fields={'sentence': ('t', SENTENCE), 'censor': ('l', CENSOR)},
                                                format="json")

train_data, valid_data = train_data.split(random_state=random.seed(SEED))

device = torch.device('cuda')

train_iter, valid_iter, test_iter = data.BucketIterator.splits((train_data, valid_data, test_data),
                                                            batch_size=BATCH_SIZE,
                                                            device=device,
                                                            sort_key=lambda x: len(x.text))

SENTENCE.build_vocab(train_data, 
                max_size = MAX_VOCAB_SIZE, 
                vectors = "glove.6B.100d", 
                unk_init = torch.Tensor.normal_)

CENSOR.build_vocab(train_data)
print("Embedding done!")


class Model(nn.Module):
    def __init__(self, vocab_size, embedding_dim, hidden_dim, output_dim, n_layers, bidirectional, dropout, pad_idx):
        
        super().__init__()
        
        self.embedding = nn.Embedding(vocab_size, embedding_dim, padding_idx = pad_idx)
        
        self.rnn = nn.LSTM(embedding_dim, 
                           hidden_dim, 
                           num_layers=n_layers, 
                           bidirectional=bidirectional, 
                           dropout=dropout)
        
        self.fc = nn.Linear(hidden_dim*2, output_dim)
        
        self.dropout = nn.Dropout(dropout)

    def forward(self, text, text_lengths): 
        embedded = self.dropout(self.embedding(text))
        packed_embedded = nn.utils.rnn.pack_padded_sequence(embedded, text_lengths.to('cpu'))
        packed_output, (hidden, cell) = self.rnn(packed_embedded)
        output, output_lengths = nn.utils.rnn.pad_packed_sequence(packed_output)
        hidden = self.dropout(torch.cat((hidden[-2,:,:], hidden[-1,:,:]), dim = 1))         
        return self.fc(hidden)

INPUT_DIM = len(SENTENCE.vocab)
           
EMBEDDING_DIM = 100
HIDDEN_DIM = 256
OUTPUT_DIM = 1
N_LAYERS = 2
BIDIRECTIONAL = True
DROPOUT = 0.5
PAD_IDX = SENTENCE.vocab.stoi[SENTENCE.pad_token]
                                            
model = Model(INPUT_DIM, 
            EMBEDDING_DIM, 
            HIDDEN_DIM, 
            OUTPUT_DIM, 
            N_LAYERS, 
            BIDIRECTIONAL, 
            DROPOUT,
            PAD_IDX)

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

train_iterator, valid_iterator = data.BucketIterator.splits(
    (train_data, valid_data),
    sort_key=lambda x: len(x.t),
    batch_size = BATCH_SIZE,
    sort_within_batch = True,
    device = device)

pretrained_embeddings = SENTENCE.vocab.vectors

import torch.optim as optim

optimizer = optim.Adam(model.parameters())

criterion = nn.BCEWithLogitsLoss()

model = model.to(device)
criterion = criterion.to(device)
model.load_state_dict(torch.load("/Users/admin/Downloads/verystrict_tut_model.pt", map_location=device))


def predict_censor(model, sentence):
    global nlp
    model.eval()
    #nlp = en_core_web_sm.load()
    nlp = spacy.load("en_core_web_sm")
    #nlp = spacy.load('en_core_web_md')
    tokenized = [tok.text for tok in nlp.tokenizer(sentence)]
    indexed = [SENTENCE.vocab.stoi[t] for t in tokenized]
    length = [len(indexed)]
    tensor = torch.LongTensor(indexed).to(device)
    tensor = tensor.unsqueeze(1)
    length_tensor = torch.LongTensor(length)
    prediction = (torch.sigmoid(model(tensor, length_tensor)))
    return prediction.item()
           



@app.route('/api/ytvalidate', methods=('GET', 'POST'))
def validateAPI():    
    if request.method == 'POST':

        #"kill crap hate"
        #https://www.youtube.com/watch?v=xqYqMveQM6k (GOOD ONE)
        #https://www.youtube.com/watch?v=zn4oPi9-rKU (bit of bad one)
        #https://www.youtube.com/watch?v=wq1Ie6rfgqw (more bad one)
        
        #https://www.youtube.com/watch?v=Sj_WCLmAx7o (86%, forgiving-files) (38% strict)

        #https://www.youtube.com/watch?v=GzL4f-4uQVM (78%, forgiving-files) (9% strict)
        #https://www.youtube.com/watch?v=xzJBJVO_Vwo (93%, forgiving-files) (10%)

        #https://www.youtube.com/watch?v=owmwZb6yDO0 (92%, forgiving-files) (80% strict)
        responseDict = {}

        value = request.json.get('value', None)
        reqtype = request.json.get('reqtype', None)
        if (reqtype == 'youtube'):

            yturl = value
            print ("do you reach here 1")
            try:
                transcript = returnYTJSONTextFromURL(yturl)
            except Exception as e:            
                print ("do you reach here 2", e)
                return responseDict
            
            
            
            textValidate = splitYTJSONTextIntoWordsList(transcript)
            print(textValidate)
            if not textValidate:
                flash('textValidate is required!')


            finalTranscript = ""
            counter = 0
            for word in textValidate:
                finalTranscript += (" " + word)
                #if counter == 0:
                 #   finalTranscript += (word)
                #else:
                 #   finalTranscript += (" " + word)

            #responseDict["rawtext"] = "NOT SENDING ANY RAW TEXT FOR NOW - THIS WILL PART OF ADVANCED API"
            dottedString = "................................................................."
            dottedString1 = "\n................................................................."
            rawTextOutput = finalTranscript[0: 900] + dottedString + dottedString1
            responseDict["rawtext"] = rawTextOutput



            expandedBadWordsFromStore = myRedis.get('expanded-bad-words').decode().split()

            #theBadWords = most_similar("kill", topn=20)
            #customBadWords = ["stripped","mess"]
            #theBadWords.extend(customBadWords)
        
            print (expandedBadWordsFromStore)
            detectedBadWords = ""

            badWordCountDict = {}

            for eachInputWord in textValidate:    
                if (eachInputWord in expandedBadWordsFromStore):
                    if eachInputWord in badWordCountDict.keys():
                        badWordCountDict[eachInputWord] = badWordCountDict[eachInputWord]+1
                    else:
                        badWordCountDict[eachInputWord] = 1                     
                    print("Found matching word " + eachInputWord)    
                    eachInputWord += " "
                    detectedBadWords += eachInputWord

            responseDict["badwordcount"] = badWordCountDict

            

            print(finalTranscript)

            pred = predict_censor(model, finalTranscript)        
            print("The pred from the MODEL is  " + str(pred))            
            pred = round(pred, 2)
            print("The pred from the MODEL after rounding is  " + str(pred))                    
            #pred = 1 - pred            
            #pred = pred/100
            print("The pred after flipping is " + str(pred))
            print("Prediction = " + str(pred))


            responseDict["safety-score"] = pred    
            


            if detectedBadWords == "":
                detectedBadWords = "No bad word found!"

            responseString = json.dumps(responseDict)

            return responseString
        if (reqtype == 'simpletext'):

            
            finalTranscript = value
            textValidate = value.split()
            print(textValidate)  
            dottedString = "................................................................."
            dottedString1 = "\n................................................................."
            rawTextOutput = finalTranscript[0: 900] + dottedString + dottedString1      
            responseDict["rawtext"] = rawTextOutput

            expandedBadWordsFromStore = myRedis.get('expanded-bad-words').decode().split()
        
            print (expandedBadWordsFromStore)
            detectedBadWords = ""

            badWordCountDict = {}

            for eachInputWord in textValidate:    
                if (eachInputWord in expandedBadWordsFromStore):
                    if eachInputWord in badWordCountDict.keys():
                        badWordCountDict[eachInputWord] = badWordCountDict[eachInputWord]+1
                    else:
                        badWordCountDict[eachInputWord] = 1                     
                    print("Found matching word " + eachInputWord)    
                    eachInputWord += " "
                    detectedBadWords += eachInputWord

            responseDict["badwordcount"] = badWordCountDict

            pred = predict_censor(model, finalTranscript)        
            print("The pred from the MODEL is  " + str(pred))            
            pred = round(pred, 2)
            print("The pred from the MODEL after rounding is  " + str(pred))                    
            #pred = 1 - pred            
            #pred = pred/100
            print("The pred after flipping is " + str(pred))
            print("Prediction = " + str(pred))


            responseDict["safety-score"] = pred    
            


            if detectedBadWords == "":
                detectedBadWords = "No bad word found!"

            responseString = json.dumps(responseDict)

            return responseString



def returnYTJSONTextFromURL(url): 
    #ytURL = "https://www.youtube.com/watch?v=eAo8gnUCWzE"
    splitted = url.split("=")
    transcript = YouTubeTranscriptApi.get_transcript(splitted[1])
    #transcript = YouTubeTranscriptApi.get_transcript("eAo8gnUCWzE")
    print (transcript)
    return transcript

def splitYTJSONTextIntoWordsList(transcript):
    listOfAllYTubeWords = []
    for sub in transcript:
        listOfAllYTubeWords.extend(sub['text'].split())
    return listOfAllYTubeWords


@app.route('/api/config', methods=('GET', 'POST'))
def getConfigAPI():    
    if request.method == 'GET':

        responseDict = {}
        
        rawBadWords = myRedis.get('raw-bad-words').decode().split()
        expandedBadWords = myRedis.get('expanded-bad-words').decode().split()
        whiteListedURLs = myRedis.get('whitelisturls').decode().split()            
        

        responseDict["raw-bad-words"] = rawBadWords
        responseDict["expanded-bad-words"] = expandedBadWords
        responseDict["whitelisturls"] = whiteListedURLs

        responseString = json.dumps(responseDict)

        return responseString


@app.route('/api/rawbadwords_v2', methods=('GET','POST','PUT'))
def setRawBadWordsAPI_V2():    
    if request.method == 'PUT':

        
        rawBadWordsIncrementalFromUser = request.json.get('raw-bad-words', None)
        print ("Input value is ", rawBadWordsIncrementalFromUser )
        existingRawBadWordsFromStore = myRedis.get('raw-bad-words').decode().split()
        
        finalListRawBadWordsToUpload = []
        finalListRawBadWordsToUpload.extend(existingRawBadWordsFromStore)
        finalListRawBadWordsToUpload.extend(rawBadWordsIncrementalFromUser.split(","))
        finalListRawBadWordsToUpload = list(dict.fromkeys(finalListRawBadWordsToUpload)) # de-duping the list
        myRedis.set('raw-bad-words'," ".join(finalListRawBadWordsToUpload))


        responseDict = {}
        
        rawBadWords = myRedis.get('raw-bad-words').decode().split()
        expandedBadWords = myRedis.get('expanded-bad-words').decode().split()
        whiteListedURLs = myRedis.get('whitelisturls').decode().split()            
        

        responseDict["raw-bad-words"] = rawBadWords
        responseDict["expanded-bad-words"] = expandedBadWords
        responseDict["whitelisturls"] = whiteListedURLs

        responseString = json.dumps(responseDict)

        return responseString

def before_request():
    app.jinja_env.cache = {}

app.before_request(before_request)

def convert(lst): 
    return ([i for item in lst for i in item.split('\s')])

@app.route('/', methods=('GET', 'POST'))
def validate():

    if request.method == 'POST':
        url = request.form['TextValidate']
        print("User Inputted String: " + url)
        transcript = returnYTJSONTextFromURL(url)
        textValidate = splitYTJSONTextIntoWordsList(transcript)

        if not textValidate:
            flash('textValidate is required!')


        expandedBadWordsFromStore = myRedis.get('expanded-bad-words').decode().split()
        
        #theBadWords = most_similar("kill", topn=20)
        #customBadWords = ["stripped","mess"]
        #theBadWords.extend(customBadWords)
    
        print (expandedBadWordsFromStore)
        detectedBadWords = ""

        for eachInputWord in textValidate:    
            if (eachInputWord in expandedBadWordsFromStore):
                print("Found matching word " + eachInputWord)    
                eachInputWord += " "
                detectedBadWords += eachInputWord

        
        if detectedBadWords == "":
            detectedBadWords = "No bad word found!"
        
        return render_template('ValidationResult.html', name=detectedBadWords)


    return render_template('Validate.html')
#...



@app.route('/api/rawbadwords', methods=('GET','POST','PUT'))

def setRawBadWordsAPI():    
    if request.method == 'PUT':

        
        rawBadWordsIncrementalFromUser = request.json.get('raw-bad-words', None)
        print ("Input value is ", rawBadWordsIncrementalFromUser )
        existingRawBadWordsFromStore = myRedis.get('raw-bad-words').decode().split()
        
        finalListRawBadWordsToUpload = []
        finalListRawBadWordsToUpload.extend(existingRawBadWordsFromStore)
        finalListRawBadWordsToUpload.extend(rawBadWordsIncrementalFromUser.split(","))
        finalListRawBadWordsToUpload = list(dict.fromkeys(finalListRawBadWordsToUpload)) # de-duping the list
        myRedis.set('raw-bad-words'," ".join(finalListRawBadWordsToUpload))

        return "The raw bad words were added successfully"


@app.route('/api/clearrawwords', methods=('GET','POST','PUT'))

def clearRAWWordsAPI():    
    if request.method == 'PUT':
        myRedis.set('raw-bad-words',"")

        return "Raw words were cleared successfully, the expanded words are still intact"


@app.route('/api/clearexpandedwords', methods=('GET','POST','PUT'))

def clearExpandedWordsAPI():    
    if request.method == 'PUT':        
        myRedis.set('expanded-bad-words',"")

        return "Only Expanded words were cleared successfully, the raw words still intact"


@app.route('/api/clearwhitelisturls', methods=('GET','POST','PUT'))

def clearWhiteListURLsAPI():    
    if request.method == 'PUT':        
        myRedis.set('whitelisturls',"")

        return "WhiteList URLs cleared successfully"



@app.route('/api/clearconfig', methods=('GET','POST','PUT'))

def clearConfigAPI():    
    if request.method == 'PUT':        
        myRedis.set('raw-bad-words',"")
        myRedis.set('expanded-bad-words',"")
        myRedis.set('whitelisturls',"")

        return "Entire config (raw, expanded, and whitelisturls) cleared successfully"



@app.route('/api/whitelisturls', methods=('GET','POST','PUT'))

def setWhiteListedURLsAPI():    
    if request.method == 'PUT':
        
        whiteListURLsFromUser = request.json.get('whitelisturls', None)
        existingWhiteListURLsFromStore = myRedis.get('whitelisturls').decode().split()

        
        finalListWhiteListURLsToUpload = []
        finalListWhiteListURLsToUpload.extend(existingWhiteListURLsFromStore)
        finalListWhiteListURLsToUpload.extend(whiteListURLsFromUser.split(","))
        finalListWhiteListURLsToUpload = list(dict.fromkeys(finalListWhiteListURLsToUpload)) # de-duping the list
        myRedis.set('whitelisturls'," ".join(finalListWhiteListURLsToUpload))

        return "The whitelist URLs were added successfully"


@app.route('/api/whitelisturls_v2', methods=('GET','POST','PUT'))

def setWhiteListedURLsAPI_V2():    
    if request.method == 'PUT':
        
        whiteListURLsFromUser = request.json.get('whitelisturls', None)
        existingWhiteListURLsFromStore = myRedis.get('whitelisturls').decode().split()

        
        finalListWhiteListURLsToUpload = []
        finalListWhiteListURLsToUpload.extend(existingWhiteListURLsFromStore)
        finalListWhiteListURLsToUpload.extend(whiteListURLsFromUser.split(","))
        finalListWhiteListURLsToUpload = list(dict.fromkeys(finalListWhiteListURLsToUpload)) # de-duping the list
        myRedis.set('whitelisturls'," ".join(finalListWhiteListURLsToUpload))


        responseDict = {}
     
        rawBadWords = myRedis.get('raw-bad-words').decode().split()
        expandedBadWords = myRedis.get('expanded-bad-words').decode().split()
        whiteListedURLs = myRedis.get('whitelisturls').decode().split()            
        
        responseDict["raw-bad-words"] = rawBadWords
        responseDict["expanded-bad-words"] = expandedBadWords
        responseDict["whitelisturls"] = whiteListedURLs

        responseString = json.dumps(responseDict)

        #https://www.youtube.com/watch?v=HcglvxGuD2w
        #https://www.youtube.com/watch?v=xFerSWoibPs
        #https://www.youtube.com/watch?v=lQJuF5okZsI
        #https://www.youtube.com/watch?v=4-sIQEp0O0U
        return responseString


@app.route('/api/test', methods=('GET', 'POST'))

def validateAPITest():    
    if request.method == 'GET':  
        mydict = {}
        return detectedBadWords