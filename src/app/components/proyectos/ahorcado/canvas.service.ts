import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CanvasService {
  cx: CanvasRenderingContext2D;
  palabras: string[] = [
    'usted',
    'chico',
    'muchachos',
    'gusto',
    'anoche',
    'quedarse',
    'nervioso',
    'sentado',
    'primo',
    'evidencia',
    'vivero',
    'andando',
    'mentiroso',
    'conciencia',
    'posibilidades',
    'contado',
    'armario',
    'rastro',
    'casco',
    'consecuencias',
    'buscado',
    'torneo',
  ];
  palabra: string = '';
  aciertos: number = 0;
  errores: number = 0;
  letrasIngresadas: string[] = [];
  letrasAcertadas: string[] = [];
  letrasErradas: string[] = [];
  finalizado: boolean = true;
  constructor() {}

  addCx(ctx: CanvasRenderingContext2D) {
    this.cx = ctx;
  }

  getPalabra() {
    const indice = Math.floor(Math.random() * this.palabras.length);
    const palabraElegida = this.palabras[indice].toUpperCase();
    this.crearEspacioLetras(palabraElegida);
    this.palabra = palabraElegida;
  }
  addPalabra(palabra: string): void {
    this.palabras.push(palabra);
  }
  registroPalabras() {
    let espacio: number = 80;
    this.cx.beginPath();
    this.cx.textAlign = 'left';
    this.cx.fillStyle = 'green';
    this.cx.font = '16px montserrat';
    this.cx.fillText('Aciertos:', 5, 240);
    this.letrasAcertadas.forEach((e) => {
      this.cx.fillText(e, espacio, 240);
      espacio = espacio + 20;
    });
    espacio = 80;
    this.cx.fillStyle = 'red';
    this.cx.fillText('Errores: ', 5, 270);
    this.letrasErradas.forEach((e) => {
      this.cx.fillText(e, espacio, 270);
      espacio = espacio + 20;
    });
    this.cx.closePath();
  }
  crearEspacioLetras(palabra: string) {
    let inicio = 10;
    let espacio = 40 / palabra.length;
    let espaciado = (280 - palabra.length * espacio) / palabra.length;
    for (let i = 0; i < palabra.length; i++) {
      this.cx.beginPath();
      this.cx.moveTo(inicio, 380);
      this.cx.lineTo(inicio + espaciado, 380);
      this.cx.stroke();
      this.cx.closePath();
      inicio += espaciado + espacio;
    }
  }

  evaluarLetra(letra: string) {
    if (this.finalizado) {
      this.cx.clearRect(0, 182, 320, 100);
      this.registroPalabras();
      if (!this.letrasIngresadas.includes(letra)) {
        this.letrasIngresadas.push(letra);
        if (this.palabra.includes(letra)) {
          this.letrasAcertadas.push(letra);
          let inicio = 10;
          let espacio = 40 / this.palabra.length;
          this.cx.textAlign = 'center';
          let espaciado =
            (280 - this.palabra.length * espacio) / this.palabra.length;
          for (var i = 0; i < this.palabra.length; i++) {
            if (letra == this.palabra[i]) {
              this.cx.beginPath();
              this.cx.fillStyle = 'black';
              this.cx.font = `bold ${6 * espacio}px montserrat`;
              this.cx.fillText(letra, inicio + espaciado / 2, 377);
              this.cx.closePath();
              this.aciertos++;
              if (this.aciertos == this.palabra.length) {
                this.finalizarJuego('gano');
              }
            }
            inicio += espaciado + espacio;
          }
        } else {
          this.letrasErradas.push(letra);
          this.dibujarError();
        }
      } else {
        this.letraRepetida();
      }
    }
  }

  letraRepetida() {
    this.cx.beginPath();
    this.cx.font = `bold 20px montserrat`;
    this.cx.fillStyle = 'red';
    this.cx.textAlign = 'left';
    this.cx.fillText('La letra ya fue ingresada', 15, 210);
    this.cx.closePath();
  }
  dibujarError() {
    this.errores++;
    this.cx.beginPath();
    switch (this.errores) {
      case 1:
        this.cx.moveTo(60, 150); //palo1
        this.cx.lineTo(60, 10);
        break;
      case 2:
        this.cx.moveTo(60, 10); //palo2
        this.cx.lineTo(180, 10);
        break;
      case 3:
        this.cx.moveTo(180, 10); //palo3
        this.cx.lineTo(180, 25);
        break;
      case 4:
        this.cx.moveTo(180, 10); //cabeza
        this.cx.arc(180, 40, 15, 300, 2 * 3.14, true);
        break;
      case 5:
        this.cx.moveTo(180, 55); //cuerpo
        this.cx.lineTo(180, 120);
        break;
      case 6:
        this.cx.moveTo(180, 120); //pierna1
        this.cx.lineTo(155, 160);
        break;
      case 7:
        this.cx.moveTo(180, 120); //pierna2
        this.cx.lineTo(205, 160);
        break;
      case 8:
        this.cx.moveTo(180, 70); //brazo1
        this.cx.lineTo(210, 100);
        break;
      case 9:
        this.cx.moveTo(180, 70); //brazo2
        this.cx.lineTo(150, 100);
        this.finalizarJuego('perdio');
        break;
    }
    this.cx.stroke();
    this.cx.closePath();
  }
  finalizarJuego(resultado: string) {
    this.cx.beginPath();
    this.cx.textAlign = 'center';
    this.cx.font = `bold 23px montserrat`;
    if (resultado == 'gano') {
      this.cx.fillStyle = 'green';
      this.cx.fillText('Felicidades por Ganar!', 150, 310);
    } else {
      this.cx.fillStyle = 'red';
      this.cx.fillText('Usted Perdió', 160, 320);
      this.cx.clearRect(0, 360, 320, 400);
      this.cx.fillText('La Palabra era:', 160, 350);
      this.cx.font = `bold 30px montserrat`;
      this.cx.fillText(this.palabra, 160, 395);
    }
    this.cx.closePath();
    this.finalizado = false;
  }
  reset() {
    this.aciertos = 0;
    this.errores = 0;
    this.letrasIngresadas = [];
    this.letrasAcertadas = [];
    this.letrasErradas = [];
    this.palabra = '';
    this.finalizado = true;
  }
}
