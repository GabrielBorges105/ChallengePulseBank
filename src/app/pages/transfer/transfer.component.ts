import { Router } from '@angular/router';
import { AlertService } from './../../services/alert/alert.service';
import { TransferService } from './../../services/transfer/transfer.service';
import { Transfer } from './../../shared/models/Transfer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})
export class TransferComponent implements OnInit {
  transferForm: Transfer = { agency: '', number: '', amount: 0 };

  constructor(
    private transferService: TransferService,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {}

  onClickSubmit(): void {
    this.transferService.transfer(this.transferForm).subscribe({
      next: (res) => {
          this.router.navigate(['/statement']);
          this.alertService.success(
          'Transfer was finished with success!',
          'Success'
        );
      },
      error: (res) => {
        this.alertService.error(res.message, 'Error');
      },
    });
  }
}
