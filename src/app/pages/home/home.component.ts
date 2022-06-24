import { AlertService } from './../../services/alert/alert.service';
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
  isOpenCreateModal: boolean = false;
  formAccount: any = { balance: '', number: '' };

  constructor(
    private accountService: AccountService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.loadListAccounts();
  }

  showCreateModal(): void {
    this.isOpenCreateModal = true;
  }
  closeCreateModal(): void {
    this.isOpenCreateModal = false;
  }

  loadListAccounts(): void {
    this.accountService.list().subscribe((accounts: Account[]) => {
      this.listAcounts = accounts;
    });
  }

  onClickSubmit() {
    this.accountService.create(this.formAccount).subscribe({
      next: (res) => {
        this.loadListAccounts();
        this.isOpenCreateModal = false;
        this.alertService.success('Account created successfully', 'Success');
      },
      error: (res) => {
        this.alertService.error(
          'Error trying to create account. Check if you already have a registered account',
          'Error'
        );
      },
    });
  }
}
