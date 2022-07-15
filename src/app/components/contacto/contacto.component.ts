import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { type } from 'os';
import { FirebaseService } from 'src/app/firebase.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent implements OnInit {
  ventana: any;
  emailForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    mensaje: new FormControl('', [Validators.required]),
  });
  constructor(private firabase: FirebaseService) {}

  ngOnInit(): void {}
  send() {
    let mensaje: Object = {
      nombre: this.emailForm.get('nombre')?.value,
      correo: this.emailForm.get('correo')?.value,
      mensaje: this.emailForm.get('mensaje')?.value,
    };
    this.firabase.getFirebase('mailTo.json').subscribe((Response: any) => {
      Response.unshift(mensaje);
      this.firabase.sendFirebase('mailTo.json', Response);
    });
    let enviarMail: any = new Promise(() => {
      this.ventana = window.open(
        'https://script.google.com/macros/s/AKfycbx4q7Jf1EyIb-HUj6212kvm-35IfjiFM8eG4qePjXUFCHvufQ8xheaZr2oO4F8ysNrT/exec',
        '_blank'
      );
    });
    enviarMail.then(
      setTimeout(() => {
        this.ventana.close();
      }, 15000)
    );
    this.emailForm.reset();
  }
}
