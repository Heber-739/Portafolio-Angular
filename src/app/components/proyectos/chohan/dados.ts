import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DadosMagicosService {
  constructor() {}

  limpiarDado1(): void {
    const lista1: any = document.querySelectorAll('.cir1');
    for (var i = 0; i < lista1.length; i++) {
      lista1[i].style.display = 'none';
    }
  }
  limpiarDado2(): void {
    const lista2: any = document.querySelectorAll('.cir2');
    for (var i = 0; i < lista2.length; i++) {
      lista2[i].style.display = 'none';
    }
  }

  girarDados(): number[] {
    let numeroDeGiros: number = Math.random() * 15 + 7;
    let seg: number = 200;
    for (let i = 0; i <= numeroDeGiros; i++) {
      setTimeout(() => {
        this.girar_dado1();
      }, seg);
      setTimeout(() => {
        this.girar_dado2();
      }, seg);
      seg += 200;
    }
    const resultado1 = this.girar_dado1();
    const resultado2 = this.girar_dado2();
    const resultadoFinal = resultado1 + resultado2;
    return new Array(numeroDeGiros, resultadoFinal);
  }

  girar_dado1(): number {
    const giro1 = Math.round(Math.random() * 5 + 1);
    switch (giro1) {
      case 1:
        this.limpiarDado1();
        let a1: any = document.getElementById('valor4_1');
        a1.style.display = 'block';
        break;
      case 2:
        this.limpiarDado1();
        let b1: any = document.getElementById('valor3_1');
        b1.style.display = 'block';
        let b2: any = document.getElementById('valor5_1');
        b2.style.display = 'block';
        break;
      case 3:
        this.limpiarDado1();
        let c1: any = document.getElementById('valor3_1');
        c1.style.display = 'block';
        let c2: any = document.getElementById('valor4_1');
        c2.style.display = 'block';
        let c3: any = document.getElementById('valor5_1');
        c3.style.display = 'block';
        break;
      case 4:
        this.limpiarDado1();
        let d1: any = document.getElementById('valor1_1');
        d1.style.display = 'block';
        let d2: any = document.getElementById('valor3_1');
        d2.style.display = 'block';
        let d3: any = document.getElementById('valor5_1');
        d3.style.display = 'block';
        let d4: any = document.getElementById('valor6_1');
        d4.style.display = 'block';
        break;
      case 5:
        this.limpiarDado1();
        let e1: any = document.getElementById('valor1_1');
        e1.style.display = 'block';
        let e2: any = document.getElementById('valor3_1');
        e2.style.display = 'block';
        let e3: any = document.getElementById('valor4_1');
        e3.style.display = 'block';
        let e4: any = document.getElementById('valor5_1');
        e4.style.display = 'block';
        let e5: any = document.getElementById('valor6_1');
        e5.style.display = 'block';
        break;
      case 6:
        this.limpiarDado1();
        let f1: any = document.getElementById('valor1_1');
        f1.style.display = 'block';
        let f2: any = document.getElementById('valor2_1');
        f2.style.display = 'block';
        let f3: any = document.getElementById('valor3_1');
        f3.style.display = 'block';
        let f4: any = document.getElementById('valor5_1');
        f4.style.display = 'block';
        let f5: any = document.getElementById('valor7_1');
        f5.style.display = 'block';
        let f6: any = document.getElementById('valor6_1');
        f6.style.display = 'block';
        break;
    }
    return giro1;
  }

  girar_dado2(): number {
    const giro2: number = Math.round(Math.random() * 5 + 1);
    switch (giro2) {
      case 1:
        this.limpiarDado2();
        let a1: any = document.getElementById('valor4_2');
        a1.style.display = 'block';
        break;
      case 2:
        this.limpiarDado2();
        let b1: any = document.getElementById('valor3_2');
        b1.style.display = 'block';
        let b2: any = document.getElementById('valor5_2');
        b2.style.display = 'block';
        break;
      case 3:
        this.limpiarDado2();
        let c1: any = document.getElementById('valor3_2');
        c1.style.display = 'block';
        let c2: any = document.getElementById('valor4_2');
        c2.style.display = 'block';
        let c3: any = document.getElementById('valor5_2');
        c3.style.display = 'block';
        break;
      case 4:
        this.limpiarDado2();
        let d1: any = document.getElementById('valor1_2');
        d1.style.display = 'block';
        let d2: any = document.getElementById('valor3_2');
        d2.style.display = 'block';
        let d3: any = document.getElementById('valor5_2');
        d3.style.display = 'block';
        let d4: any = document.getElementById('valor6_2');
        d4.style.display = 'block';
        break;
      case 5:
        this.limpiarDado2();
        let e1: any = document.getElementById('valor1_2');
        e1.style.display = 'block';
        let e2: any = document.getElementById('valor3_2');
        e2.style.display = 'block';
        let e3: any = document.getElementById('valor4_2');
        e3.style.display = 'block';
        let e4: any = document.getElementById('valor5_2');
        e4.style.display = 'block';
        let e5: any = document.getElementById('valor6_2');
        e5.style.display = 'block';
        break;
      case 6:
        this.limpiarDado2();
        let f1: any = document.getElementById('valor1_2');
        f1.style.display = 'block';
        let f2: any = document.getElementById('valor2_2');
        f2.style.display = 'block';
        let f3: any = document.getElementById('valor3_2');
        f3.style.display = 'block';
        let f4: any = document.getElementById('valor5_2');
        f4.style.display = 'block';
        let f5: any = document.getElementById('valor7_2');
        f5.style.display = 'block';
        let f6: any = document.getElementById('valor6_2');
        f6.style.display = 'block';
        break;
    }
    return giro2;
  }
  leerRegistro(registro: string[]) {}
}
