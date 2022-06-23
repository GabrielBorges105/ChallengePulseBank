import { AuthService } from './../../services/auth/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

   canActivate(
   next: ActivatedRouteSnapshot,
   state: RouterStateSnapshot): boolean | UrlTree {
      let url: string = state.url;

          return this.checkLogin(url);
      }

      checkLogin(url: string): true | UrlTree {
         const val: string | null = localStorage.getItem('isUserLoggedIn');
         const token: string | null = localStorage.getItem('pulse_token');

         if(val != null && val == "true" && token != null){
            if(url == "/login")
               this.router.parseUrl('/home');
            else
               return true;
         } else {
            return this.router.parseUrl('/login');
         }
         return true;
      }
}
