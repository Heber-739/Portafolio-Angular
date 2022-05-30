import { AfterViewInit, Injectable, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TemasService implements OnInit {
  constructor(private guardarPreferencia: LocalStorageService) {}

  ngOnInit(): void {}

  cambiarTemas(valor: string): void {
    this.guardarPreferencia.changeTheme('theme', valor);
    switch (valor) {
      case 'azul':
        document.documentElement.style.setProperty('--color1', '#3c40a4');
        document.documentElement.style.setProperty('--color2', '#4d68f0');
        document.documentElement.style.setProperty('--color3', '#8697fe');
        document.documentElement.style.setProperty('--color4', '#003567');
        document.documentElement.style.setProperty('--color5', '#119e99');
        break;
      case 'rojo':
        document.documentElement.style.setProperty('--color1', '#a30a29');
        document.documentElement.style.setProperty('--color2', '#e21d38');
        document.documentElement.style.setProperty('--color3', '#ff8987');
        document.documentElement.style.setProperty('--color4', '#761622');
        document.documentElement.style.setProperty('--color5', '#8d5151');
        break;
      case 'verde':
        document.documentElement.style.setProperty('--color1', '#40A33C');
        document.documentElement.style.setProperty('--color2', '#62E349');
        document.documentElement.style.setProperty('--color3', '#78E37A');
        document.documentElement.style.setProperty('--color4', '#356600');
        document.documentElement.style.setProperty('--color5', '#9E9911');

        break;
      case 'gris':
        document.documentElement.style.setProperty('--color1', '#2f4f4f');
        document.documentElement.style.setProperty('--color2', '#778899');
        document.documentElement.style.setProperty('--color3', '#d3d3d3');
        document.documentElement.style.setProperty('--color4', '#708090');
        document.documentElement.style.setProperty('--color5', '#808080');
        break;
    }
  }
}
