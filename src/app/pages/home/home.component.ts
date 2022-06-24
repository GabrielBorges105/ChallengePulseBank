import { AccountService } from './../../services/account/account.service';
import { Account } from './../../shared/models/account';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  listAcounts: Account[] = [{ id: '', agency: '', number: '' }];

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService.list().subscribe((accounts: Account[]) => {
      this.listAcounts = accounts;
    });
  }
}
