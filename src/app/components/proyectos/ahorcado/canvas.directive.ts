import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCanvas]',
})
export class CanvasDirective implements OnInit, AfterViewInit {
  cx: CanvasRenderingContext2D;
  constructor(public elementRef: ElementRef) {
    this.cx = this.elementRef.nativeElement.getContext('2d');
  }
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.render();
    console.log(this.cx);
  }
  render() {
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
  }
  dibujar() {
    this.cx.beginPath();
    this.cx.fillRect(0, 0, 100, 150);
  }
}
