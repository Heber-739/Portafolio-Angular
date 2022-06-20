import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/local-storage.service';
import { AuthService } from './Auth-Service.service';
import { confirmacion, MisValidadores } from './misValidadores';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  registrarse: boolean = false;
  loginStatus: string = '';
  mensajeLogin: boolean = false;
  isLogged: boolean = false;
  login = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.email]),
    contrasena: new FormControl('', [Validators.required]),
  });

  logup = new FormGroup(
    {
      correoDos: new FormControl('', [Validators.required, Validators.email]),
      contrasenaDos: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
        MisValidadores.haveNumber(/[0-9]/),
        MisValidadores.haveCharacter(/[^\s\w]/),
        MisValidadores.haveSpace(/^[\S]+$/),
        MisValidadores.haveStringMay(/[A-Z]/),
        MisValidadores.haveStringMin(/[a-z]/),
      ]),
      confirmarContrasena: new FormControl('', [Validators.required]),
    },
    confirmacion
  );

  constructor(
    private authService: AuthService,
    private localS: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.isLogged = this.authService.isLoggedMethod();
  }
  logUp() {
    this.registrarse = !this.registrarse;
  }
  entrar() {
    let user: any = this.localS.get('login');
    let form: string[] = [
      this.login.get('correo')?.value,
      this.login.get('contrasena')?.value,
    ];
    this.mensajeLogin = true;
    if (user.length > 1) {
      if (form[0] === user[0] && form[1] === form[1]) {
        this.mensajeLogin = false;
        this.authService.login();
      } else if (form[0] !== user[0]) {
        this.loginStatus = 'Correo Incorrecto';
        if (form[1] !== user[1]) {
          this.loginStatus = 'Correo y contraseña incorrectas';
        }
      } else {
        if (form[1] !== user[1]) {
          this.loginStatus = 'Contraseña incorrectas';
        }
      }
    } else if (user.length == 0) {
      this.loginStatus = 'Usuario no encontrado';
    }
  }
  nuevoRegistro() {
    localStorage.setItem(
      'login',
      JSON.stringify([
        this.logup.get('correoDos')?.value,
        this.logup.get('contrasenaDos')?.value,
      ])
    );
    this.logUp();
  }
}
