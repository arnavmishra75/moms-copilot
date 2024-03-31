import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAddWordsToBlockRequest } from '../interfaces/iadd-words-to-block-request';
import { IAddWhiteListUrlsRequest } from '../interfaces/iadd-white-list-urls-request';
import { IConfigurationResponse } from '../interfaces/iconfiguration-response';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  //baseUrl = 'https://76c949e5bc5b.ngrok.io/api/';
  baseUrl = 'http://localhost:5000/api/';
  constructor(private http: HttpClient) {}

  getConfigs(): Observable<IConfigurationResponse> {
    console.log('getting configs');
    const configUrlPath = 'config';
    const configUrl = this.baseUrl + configUrlPath;
    return this.http.get<IConfigurationResponse>(configUrl);
  }

  addWordsToBlock(wordsToBlock: string[]): Observable<any> {
    console.log('words to block', wordsToBlock);
    const addWordsToBlockUrlPath = 'rawbadwords_v2';
    const addWordsToBlockUrl = this.baseUrl + addWordsToBlockUrlPath;
    const request: IAddWordsToBlockRequest = {
      'raw-bad-words': wordsToBlock.join(','),
    };
    return this.http.put<any>(addWordsToBlockUrl, request);
  }

  clearWordsToBlock(wordsToBlock: string[]): Observable<string[]> {
    console.log('words to block', wordsToBlock);
    const clearWordsToBlockUrlPath = 'clearrawwords';
    const clearWordsToBlockUrl = this.baseUrl + clearWordsToBlockUrlPath;
    const request = {};
    return this.http.put<string[]>(clearWordsToBlockUrl, request);
  }

  addWhiteListUrl(urlToWhiteList: string[]): Observable<string[]> {
    console.log('url to whitelist', urlToWhiteList);
    const addWhiteListUrlPath = 'whitelisturls_v2';
    const addWhiteListUrl = this.baseUrl + addWhiteListUrlPath;
    const request: IAddWhiteListUrlsRequest = {
      whitelisturls: urlToWhiteList.join(','),
    };
    return this.http.put<string[]>(addWhiteListUrl, request);
  }

  clearWhiteListUrl(urlToWhiteList: string[]): Observable<string[]> {
    console.log('url to whitelist', urlToWhiteList);
    const clearWhiteListUrlPath = 'whitelisturls';
    const clearWhiteListUrl = this.baseUrl + clearWhiteListUrlPath;
    const request = {};
    return this.http.put<string[]>(clearWhiteListUrl, request);
  }
}
