import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IValidationResponse } from '../interfaces/ivalidation-response';
import { IValidationRequest } from '../interfaces/ivalidation-request';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  //baseUrl = 'https://76c949e5bc5b.ngrok.io/api/';
  baseUrl = 'http://localhost:5000/api/';
  constructor(private http: HttpClient) {}

  validateQuery(
    validationQuery: IValidationRequest
  ): Observable<IValidationResponse> {
    console.log('validationQuery', validationQuery);
    const validationUrlPath = 'ytvalidate';
    const validationUrl = this.baseUrl + validationUrlPath;
    return this.http.post<IValidationResponse>(validationUrl, validationQuery);
  }
}
