import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemasService {

  constructor() { }
  
  cambiarTemas(valor: number): void{
    switch (valor) {
      case 1:
        document.documentElement.style.setProperty('--color1', '#3c40a4');
        document.documentElement.style.setProperty('--color2', '#4d68f0');
        document.documentElement.style.setProperty('--color3', '#8697fe');
        document.documentElement.style.setProperty('--color4', '#003567');
        document.documentElement.style.setProperty('--color5', '#119e99');
        
        break;
      case 2:
        document.documentElement.style.setProperty('--color1', '#a30a29');
        document.documentElement.style.setProperty('--color2', '#e21d38');
        document.documentElement.style.setProperty('--color3', '#ff8987');
        document.documentElement.style.setProperty('--color4', '#761622');
        document.documentElement.style.setProperty('--color5', '#8d5151');
        break;
      case 3:
        document.documentElement.style.setProperty('--color1', '#40A33C');
        document.documentElement.style.setProperty('--color2', '#68F04D');
        document.documentElement.style.setProperty('--color3', '#87FF89');
        document.documentElement.style.setProperty('--color4', '#356600');
        document.documentElement.style.setProperty('--color5', '#9E9911');
        
          break;
      case 4:
        document.documentElement.style.setProperty('--color1', '#2f4f4f');
        document.documentElement.style.setProperty('--color2', '#778899');
        document.documentElement.style.setProperty('--color3', '#d3d3d3');
        document.documentElement.style.setProperty('--color4', '#708090');
        document.documentElement.style.setProperty('--color5', '#808080');
          break;
    }
  }
}
