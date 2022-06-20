import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLogged: boolean = false;
  constructor(private router: Router) {
    if (
      localStorage.getItem('loginStatus')?.length == 0 ||
      localStorage.getItem('loginStatus') == 'false'
    ) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }
  }
  public urlIntentaAcceder: string = '';

  public loginStatusSubject = new Subject<boolean>();
  public loginStatus$ = this.loginStatusSubject.asObservable();

  isLoggedMethod(): boolean {
    return this.isLogged;
  }

  login() {
    this.isLogged = true;
    localStorage.setItem('loginStatus', 'true');
    this.loginStatusSubject.next(true);
    this.router.navigate([this.urlIntentaAcceder]);
    this.urlIntentaAcceder = '';
  }
  logout() {
    this.isLogged = false;
    this.loginStatusSubject.next(false);
    localStorage.setItem('loginStatus', 'false');
  }
  isLoggedIn(url: string) {
    this.urlIntentaAcceder = url;
    return this.isLogged;
  }
}
