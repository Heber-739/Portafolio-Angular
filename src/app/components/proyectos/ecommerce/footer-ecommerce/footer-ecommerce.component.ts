import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer-ecommerce',
  templateUrl: './footer-ecommerce.component.html',
  styleUrls: ['./footer-ecommerce.component.css'],
})
export class FooterEcommerceComponent implements OnInit {
  formContact = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    mensaje: new FormControl('', [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {}
}
