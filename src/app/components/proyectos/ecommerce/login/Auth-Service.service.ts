import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLogged: boolean = false;
  public loginStatusSubject = new Subject<boolean>();
  public loginStatus$ = this.loginStatusSubject.asObservable();
  public urlIntentaAcceder: string = '/proyectos/ecommerce';

  constructor(private router: Router) {}

  isLoggedMethod(): boolean {
    let localS = JSON.parse(localStorage.getItem('loginStatus') || '[]');
    if (localS == false || localS.length == 0) {
      this.isLogged = false;
    } else if (localS) {
      this.isLogged = true;
    }
    this.loginStatusSubject.next(this.isLogged);
    return this.isLogged;
  }

  login() {
    this.isLogged = true;
    localStorage.setItem('loginStatus', JSON.stringify(this.isLogged));
    this.loginStatusSubject.next(true);
    this.router.navigate([this.urlIntentaAcceder]);
    this.urlIntentaAcceder = '/proyectos/ecommerce';
  }
  logout() {
    this.isLogged = false;
    this.loginStatusSubject.next(false);
    localStorage.setItem('loginStatus', JSON.stringify(this.isLogged));
  }
}
