import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/local-storage.service';
import { DadosMagicosService } from './dados';
import { Registro } from './registro';

@Component({
  selector: 'app-chohan',
  templateUrl: './chohan.component.html',
  styleUrls: ['./chohan.component.css'],
})
export class ChohanComponent implements OnInit {
  registros: Registro[];
  nombre: string = '';
  billetera: number = 0;
  visible: boolean = true;
  pregunta: boolean = false;
  switchMensaje: string = '';
  SaldoSuficiente: string = 'disponible';
  resultado: number;
  paridad: string = '';
  apostando: number;

  nameInput = new FormControl('', [Validators.required]);
  billeteraInput = new FormControl('', [Validators.required]);
  apuestasInput = new FormControl({ value: '', disabled: true }, [
    Validators.required,
  ]);

  constructor(
    private dadosService: DadosMagicosService,
    private localStorage: LocalStorageService
  ) {}
  ngOnInit(): void {
    this.registros = this.localStorage.get('Chohan');
  }

  start() {
    this.billetera = this.billeteraInput.value;
    this.nombre = this.nameInput.value;
    this.visible = false;
    this.apuestasInput.enable();
    this.switchMensaje = 'bienvenida';
  }

  jugar(paridad: string) {
    this.apostando = this.apuestasInput.value;
    this.apuestasInput.reset();
    this.apuestasInput.disable();
    const timer = this.dadosService.girarDados();
    setTimeout(() => {
      let nuevoRegistro: Registro = {
        apuesta: this.apostando,
        saldo: 0,
        gano: '',
      };
      if (timer[1] % 2 == 0 && paridad == 'par') {
        this.switchMensaje = 'gano';
        this.billetera += this.apostando;
        nuevoRegistro.saldo = this.billetera;
        nuevoRegistro.gano = 'gano';
      } else if (timer[1] % 2 != 0 && paridad == 'impar') {
        this.switchMensaje = 'gano';
        this.billetera += this.apostando;
        nuevoRegistro.saldo = this.billetera;
        nuevoRegistro.gano = 'gano';
      } else {
        this.switchMensaje = 'perdio';
        this.billetera -= this.apostando;
        nuevoRegistro.saldo = this.billetera;
        nuevoRegistro.gano = 'perdio';
      }
      this.resultado = timer[1];
      if (timer[1] % 2 == 0) {
        this.paridad = 'par';
      } else {
        this.paridad = 'impar';
      }
      if (this.billetera != 0) {
        this.pregunta = true;
      } else {
        this.deseaSeguir('no');
      }
      this.localStorage.addItem('Chohan', nuevoRegistro);
      this.registros.push(nuevoRegistro);
    }, timer[0] * 205);
  }

  deseaSeguir(valor: string) {
    this.paridad = '';
    if (valor == 'si') {
      this.apuestasInput.enable();
    } else {
      this.switchMensaje = 'despedida';
      this.SaldoSuficiente = '';
      this.billetera = 0;
    }
    this.pregunta = false;
  }
}
