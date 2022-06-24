import { Observable } from 'rxjs';
import { Account } from './../../shared/models/account';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private url = 'https://pulse-bank-api-test.herokuapp.com';

  constructor(private httpClient: HttpClient) {}

  list(): Observable<Account[]> {
    return this.httpClient.get<Account[]>(`${this.url}/account`);
  }
}
