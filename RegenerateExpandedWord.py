
from markupsafe import escape

import json
import redis
import spacy
import numpy as np

myRedis = redis.Redis(host='localhost', port=6379, db=0)

import spacy
nlp = None

def regenerateExpandedBadWordsAPI():  
    global nlp  
    
    nlp = spacy.load('en_core_web_md')
    rawBadWordsFromStore = myRedis.get('raw-bad-words').decode().split()
    fullListExpandedWords = []
    for eachRawBadWord in rawBadWordsFromStore:
        calculatedExpandedWordList = most_similar(eachRawBadWord, topn=35)
        fullListExpandedWords.extend(calculatedExpandedWordList)
        myRedis.set('expanded-bad-words'," ".join(fullListExpandedWords))

    return "Regenerated the expanded list successfully"


def most_similar(word, topn=5):
    
    word = nlp.vocab[str(word)]
    #print("the word is ", word)
    queries = [
        w for w in word.vocab
        if w.is_lower == word.is_lower and w.prob >= -15 and np.count_nonzero(w.vector)
    ]
    by_similarity = sorted(queries, key=lambda w: word.similarity(w), reverse=True)
    return [(w.lower_) for w in by_similarity[:topn+1] if w.lower_ != word.lower_]
    #return [(w.lower_,w.similarity(word)) for w in by_similarity[:topn+1] if w.lower_ != word.lower_]

regenerateExpandedBadWordsAPI()