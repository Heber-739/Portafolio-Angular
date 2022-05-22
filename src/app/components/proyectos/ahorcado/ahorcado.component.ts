import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CanvasService } from './canvas.service';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css'],
})
export class AhorcadoComponent implements OnInit, AfterViewInit {
  @ViewChild('canvasRef', { static: false }) canvasRef: ElementRef;

  private cx: CanvasRenderingContext2D;
  inputControl = new FormControl('', [Validators.pattern('^[a-zA-Z]+')]);
  inputTwoControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z]{1}'),
  ]);
  palabraAgregada: Boolean = false;
  visible: Boolean = true;

  constructor(private canvas: CanvasService) {}
  ngOnInit(): void {}
  ngAfterViewInit() {
    this.render();
  }
  private render() {
    this.cx = this.canvasRef.nativeElement.getContext('2d');
    this.cx.lineWidth = 3;
    this.cx.lineCap = 'round';
    this.cx.lineJoin = 'round';
    this.cx.strokeStyle = '#000';
    this.cx.beginPath();
    this.cx.fillStyle = 'black';
    this.cx.moveTo(30, 180);
    this.cx.lineTo(60, 150);
    this.cx.lineTo(90, 180);
    this.cx.lineTo(30, 180);
    this.cx.fill();
    this.canvas.addCx(this.cx);
  }

  agregarPalabra() {
    if (this.inputControl.value != '') {
      this.palabraAgregada = true;
      this.canvas.addPalabra(this.inputControl.value);
      setTimeout(() => {
        this.palabraAgregada = false;
      }, 1500);
    }
  }
  start() {
    this.visible = false;
    this.canvas.getPalabra();
    this.inputControl.setValue('');
  }
  probar() {
    const letra: string = this.inputTwoControl.value;
    this.canvas.evaluarLetra(letra.toUpperCase());
    this.inputTwoControl.reset();
  }
  reload() {
    this.cx.clearRect(0, 0, 320, 400);
    this.render();
    this.visible = true;
    this.inputControl.setValue('');
    this.canvas.reset();
  }
}
