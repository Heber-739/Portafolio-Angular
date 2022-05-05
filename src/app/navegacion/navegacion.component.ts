import { Component, OnInit } from '@angular/core';
import { TemasService } from '../temas.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  constructor(private service: TemasService) { }

  ngOnInit(): void {
  }
  cambiarTema(valor: number, elemento: HTMLDivElement){
    if (valor == 5){
      elemento.style.display = 'flex';
    } else {
      elemento.style.display = 'none';
      this.service.cambiarTemas(valor);
    }
    
  }

}
