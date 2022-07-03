import { Component, HostListener, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { TemasService } from '../temas.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css'],
})
export class NavegacionComponent implements OnInit {
  selColor: boolean = false;
  constructor(
    private service: TemasService,
    private cargarTheme: LocalStorageService
  ) {}

  ngOnInit(): void {
    const color = this.cargarTheme.readTheme('theme');
    this.service.cambiarTemas(color);
  }

  cambiarTema(valor: string) {
    if (valor == 'open') {
      this.selColor = !this.selColor;
    } else {
      this.selColor = !this.selColor;
      this.service.cambiarTemas(valor);
    }
  }
}
