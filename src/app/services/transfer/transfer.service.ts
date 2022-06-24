import { Transfer } from './../../shared/models/Transfer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  private url = 'https://pulse-bank-api-test.herokuapp.com';

  constructor(private httpClient: HttpClient) {}

  transfer(transfer: Transfer): Observable<any> {
    return this.httpClient.post<any>(`${this.url}/account/transfer`, transfer);
  }
}
