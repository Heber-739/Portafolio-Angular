import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-encriptador',
  templateUrl: './encriptador.component.html',
  styleUrls: ['./encriptador.component.css'],
})
export class EncriptadorComponent {
  showMessage: Boolean = false;

  textControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-z ]+$/),
  ]);
  textTwoControl = new FormControl('', [Validators.required]);

  constructor() {}

  encriptar(event: Event): void {
    event.preventDefault();
    let texto = this.textControl.value;
    let stringE = texto.replace(/e/g, 'enter');
    let stringI = stringE.replace(/i/g, 'imes');
    let stringA = stringI.replace(/a/g, 'ai');
    let stringO = stringA.replace(/o/g, 'ober');
    let stringU = stringO.replace(/u/g, 'ufat');
    this.textTwoControl.setValue(stringU);
  }
  desencriptar(event: Event): void {
    event.preventDefault();
    let texto = this.textControl.value;
    var stringE = texto.replace(/enter/g, 'e');
    var stringI = stringE.replace(/imes/g, 'i');
    var stringA = stringI.replace(/ai/g, 'a');
    var stringO = stringA.replace(/ober/g, 'o');
    var stringU = stringO.replace(/ufat/g, 'u');
    this.textTwoControl.setValue(stringU);
  }
  mostrarPopup(event: Event) {
    event.preventDefault();
    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false;
    }, 1500);
  }
}
