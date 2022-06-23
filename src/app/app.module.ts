import { AuthInterceptor } from './services/auth/auth.interceptor';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';

import { AppComponent } from './app.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { AppLayoutComponent } from './layout/app/app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './layout/auth/auth.component';
import { RegisterComponent } from './pages/register/register.component';

registerLocaleData(localePt, 'pt');
@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, LogoutComponent, AuthComponent, AppLayoutComponent, RegisterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
