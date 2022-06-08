import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  producto: any;
  sugerencias: any;
  cantidadItems = new FormControl(1, [Validators.required]);
  constructor(
    private route: ActivatedRoute,
    private localS: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.iniciar();
  }
  iniciar() {
    this.route.paramMap.subscribe((paraMap) => {
      let idProduct: any = paraMap.get('id');
      let items: any = this.localS.get('items');
      let productoGroup = items[idProduct[0]].array;
      let index = parseInt(idProduct.slice(1)) - 1;
      this.producto = productoGroup[index];
      this.sugerencias = productoGroup.filter((a: any) => a.id !== idProduct);
    });
  }
  agregarCarrito() {
    for (let index = 0; index < this.cantidadItems.value; index++) {
      this.localS.addItem('carrito', this.producto);
    }
  }
  nroPedidos(operacion: string) {
    let numero: number = this.cantidadItems.value;
    if (operacion == '+') {
      this.cantidadItems.setValue(numero + 1);
    } else if (numero > 1) {
      this.cantidadItems.setValue(numero - 1);
    }
  }
  nuevoPrecio(item: any) {
    let precio = parseInt(item.precio);
    if (item.descuento) {
      let descuento = (100 - parseInt(item.descuento)) / 100;
      return Math.round(precio * descuento);
    } else {
      return precio;
    }
  }
}
