import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { confirmacion, MisValidadores } from './misValidadores';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  registrarse: boolean = false;
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

  constructor() {}

  ngOnInit(): void {}
  pagarProductos() {}
  logUp() {
    this.registrarse = !this.registrarse;
  }
  entrar() {
    console.log('entro');
  }
  registro() {
    console.log('seRegistro');
  }
}
