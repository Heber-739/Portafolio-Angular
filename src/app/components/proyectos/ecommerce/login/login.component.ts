import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login = new FormGroup({
    correo: new FormControl('', [Validators.required]),
    contraseña: new FormControl('', [Validators.required]),
  });
  constructor() {}

  ngOnInit(): void {}
  pagarProductos() {}
}
