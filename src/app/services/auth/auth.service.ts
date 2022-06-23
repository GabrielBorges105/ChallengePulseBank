import { tap } from 'rxjs/operators';
import { ResponseLogin } from '../../shared/models/responseLogin';
import { RequestLogin } from '../../shared/models/requestLogin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isUserLoggedIn: boolean = false;
  private url = 'https://pulse-bank-api-test.herokuapp.com';

  constructor(private httpClient: HttpClient) {}

  login(requestLogin: RequestLogin): Observable<ResponseLogin> {
    return this.httpClient
      .post<ResponseLogin>(`${this.url}/auth/login`, requestLogin)
      .pipe(
        tap((response) => {
          this.isUserLoggedIn = true;
          localStorage.setItem('isUserLoggedIn', 'true');
          localStorage.setItem('pulse_token', response.access_token);
        })
      );
  }

  logout(): void {
    this.isUserLoggedIn = false;
    localStorage.removeItem('isUserLoggedIn');
    localStorage.removeItem('pulse_token');
  }

  isAuthenticated(): void {
    this.httpClient.get(`${this.url}/auth/profile`).subscribe({
      next: (res) => {
        this.isUserLoggedIn = true;
      },
      error: (res) => {
        this.isUserLoggedIn = false;
      },
    });
  }
}
