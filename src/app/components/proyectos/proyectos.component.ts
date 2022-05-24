import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  animations: [
    trigger('animar', [
      state(
        'start',
        style({
          opacity: '1',
        })
      ),
      state('end', style({ width: '100vw' })),
      transition('start => end', [
        animate(
          '3s ease-in-out',
          style({
            opacity: '0',
          })
        ),
      ]),
    ]),
  ],
})
export class ProyectosComponent implements OnInit {
  estadoAnimacion = 'start';
  constructor(private router: Router) {}

  ngOnInit(): void {}
  redirigir(valor: String) {
    this.estadoAnimacion = this.estadoAnimacion === 'start' ? 'end' : 'start';
    setTimeout(() => {
      this.router.navigate(['proyectos', valor]);
    }, 2501);
  }
}
