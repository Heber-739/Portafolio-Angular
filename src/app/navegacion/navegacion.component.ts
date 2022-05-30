import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { TemasService } from '../temas.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css'],
})
export class NavegacionComponent implements OnInit {
  constructor(
    private service: TemasService,
    private cargarTheme: LocalStorageService
  ) {}

  ngOnInit(): void {
    const color = this.cargarTheme.readTheme('theme');
    this.service.cambiarTemas(color);
    console.log(color);
  }

  cambiarTema(valor: string, elemento: HTMLDivElement) {
    if (valor == 'open') {
      elemento.style.display = 'flex';
    } else {
      elemento.style.display = 'none';
      this.service.cambiarTemas(valor);
    }
  }
}
