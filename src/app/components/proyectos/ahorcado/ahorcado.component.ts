import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css'],
})
export class AhorcadoComponent implements OnInit, AfterViewInit {
  inputControl = new FormControl('', [Validators.pattern('^[a-zA-Z]+')]);
  inputTwoControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z]{1}'),
  ]);
  palabraAgregada: Boolean = false;
  visible: Boolean = true;

  constructor() {}
  ngOnInit(): void {}
  ngAfterViewInit() {}

  agregarPalabra() {
    if (this.inputControl.value != '') {
      this.palabraAgregada = true;
      setTimeout(() => {
        this.palabraAgregada = false;
      }, 1500);
    }
  }
  start() {
    this.visible = false;
    this.inputControl.setValue('');
  }
  probar() {
    const letra: string = this.inputTwoControl.value;
    this.inputTwoControl.reset();
  }
  reload() {
    this.visible = true;
    this.inputControl.setValue('');
  }
}
