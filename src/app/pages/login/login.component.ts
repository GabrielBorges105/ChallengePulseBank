import { AlertService } from './../../services/alert/alert.service';
import { RequestLogin } from '../../shared/models/requestLogin';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  requestLogin: RequestLogin = new RequestLogin();

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit() {}

  onClickSubmit() {
    this.authService.login(this.requestLogin).subscribe({
      next: (data) => {
        this.alertService.success(
          'Successfully authenticated',
          'Authentication success'
        );
        if (data.access_token) {
          this.router.navigate(['/home']);
        }
      },
      error: (error) => {
        this.alertService.error(
          'Incorrect username or password',
          'Authentication error'
        );
      },
    });
  }
}
