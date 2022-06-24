import { StatementService } from './../../services/statement/statement.service';
import { Account } from './../../shared/models/account';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent implements OnInit {
  statement: Account = { id: '', agency: '', number: '' };

  constructor(private statementService: StatementService) {}

  ngOnInit(): void {
    this.statementService.statement().subscribe((statement) => {
      this.statement = statement;
    });
  }
}
