import { Observable } from 'rxjs';
import { User } from './../../shared/models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://pulse-bank-api-test.herokuapp.com';

  constructor(private httpClient: HttpClient) {}

  profile(): Observable<User> {
    return this.httpClient.get<User>(`${this.url}/auth/profile`);
  }
}
