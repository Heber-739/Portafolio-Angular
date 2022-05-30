import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  loading: boolean = false;
  delay: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  redirigir(valor: String) {
    this.loading = true;
    setTimeout(() => {
      this.delay = true;
    }, 300);
    this.router.navigate(['proyectos', valor]).then(() => {
      this.loading = false;
      this.delay = false;
    });
  }
}
