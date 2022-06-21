import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from './Auth-Service.service';

@Injectable({
  providedIn: 'root',
})
export class CanActivateGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(): boolean | UrlTree {
    return (
      this.authService.isLoggedMethod() ||
      this.router.parseUrl('/proyectos/ecommerce/login')
    );
  }
}
