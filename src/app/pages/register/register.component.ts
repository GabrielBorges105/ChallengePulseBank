import { RegisterService } from './../../services/register/register.service';
import { RequestRegister } from '../../shared/models/requestRegister';
import { AlertService } from './../../services/alert/alert.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  requestRegister: RequestRegister = new RequestRegister();

  constructor(
    private registerService: RegisterService,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit() {}

  onClickSubmit() {
    this.registerService.register(this.requestRegister).subscribe({
      next: (data) => {
        this.alertService.success(
          'User registered successfully',
          'Success'
        );
          this.router.navigate(['/login']);
      },
      error: (error) => {
        console.log("mensagem de erro", error)
        this.alertService.error(
          error.error.message,
          'Error'
        );
      },
    });
  }
}
