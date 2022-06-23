import { AuthService } from './../../services/auth/auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): true | UrlTree {
    const isLoggedIn: string | null = localStorage.getItem('isUserLoggedIn');
    const token: string | null = localStorage.getItem('pulse_token');
    if (this.authService.isUserLoggedIn) {
      if (url == '/login' || url == '/register') this.router.parseUrl('/home');
      else return true;
    } else {
      localStorage.removeItem('isUserLoggedIn');
      localStorage.removeItem('pulse_token');
      return this.router.parseUrl('/login');
    }
    return true;
  }
}
