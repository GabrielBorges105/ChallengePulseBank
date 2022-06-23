import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  secondsToRedirect: number = 5;
  myInterval: any;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.logout();
    this.myInterval = setInterval(() => {
    this.secondsToRedirect--;
      if(this.secondsToRedirect == 0){
        this.router.navigate(['/login']);
      }
    }, 1000);
  }
  ngOnDestroy() {
    clearInterval(this.myInterval);
  }
}
