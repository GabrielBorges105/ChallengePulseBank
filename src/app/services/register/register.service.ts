import { ResponseRegister } from './../../shared/models/responseRegister';
import { Observable } from 'rxjs';
import { RequestRegister } from './../../shared/models/requestRegister';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private url = 'https://pulse-bank-api-test.herokuapp.com';

  constructor(private httpClient: HttpClient) {}

  register(requestRegister: RequestRegister): Observable<ResponseRegister> {
    return this.httpClient.post<ResponseRegister>(`${this.url}/users`, requestRegister);
  }
}
