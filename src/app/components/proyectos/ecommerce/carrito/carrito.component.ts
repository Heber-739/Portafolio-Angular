import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  modificar: boolean = false;
  productos: any;
  cantidades: any;
  carritoVacio: boolean = false;
  constructor(private localS: LocalStorageService) {}

  ngOnInit(): void {
    this.iniciar();
  }

  iniciar() {
    let arrayProductos: any = this.localS.get('carrito');
    if (arrayProductos.length == 0) {
      this.carritoVacio = true;
    }
    let productosCarrito: any = [];
    let cantidadesObj: any = arrayProductos.reduce((acc: any, item: any) => {
      if (acc[item.nombre]) {
        acc[item.nombre] = acc[item.nombre] + 1;
      } else {
        acc[item.nombre] = 1;
        productosCarrito.push(item);
      }
      return acc;
    }, {});

    this.productos = productosCarrito;

    this.cantidades = cantidadesObj;
  }
  montoTotal(i: any) {
    let precio = parseInt(i.precio);
    return precio * this.cantidades[i.nombre];
  }
  modificarUnidades() {
    this.modificar = !this.modificar;
  }
  cambiarUnidades(i: any, op: string) {
    if (op == '+') {
      this.cantidades[i.nombre]++;
    } else if (this.cantidades[i.nombre] > 1) {
      this.cantidades[i.nombre]--;
    }
  }
  eliminarProducto(i: number) {
    this.productos.splice(i, 1);
    localStorage.setItem('carrito', JSON.stringify(this.productos));
    if (this.productos.length == 0) {
      this.carritoVacio = true;
    }
  }
}
