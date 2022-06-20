import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/local-storage.service';
import { AuthService } from '../login/Auth-Service.service';

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
  isLogged: boolean = false;
  constructor(
    private localS: LocalStorageService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.iniciar();
    this.authService.loginStatus$.subscribe((loggedStatus: boolean) => {
      this.isLogged = loggedStatus;
    });
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
    this.isLogged = this.authService.isLoggedMethod();
    this.cantidades = cantidadesObj;
  }
  montoTotal(i: any) {
    let precio = parseInt(i.precio);
    if (i.descuento) {
      let descuento = (100 - parseInt(i.descuento)) / 100;
      return Math.round(precio * this.cantidades[i.nombre] * descuento);
    } else {
      return precio * this.cantidades[i.nombre];
    }
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
  registrarse() {
    this.authService.urlIntentaAcceder = '/proyectos/ecommerce/carrito';
    this.router.navigate(['/proyectos', 'ecommerce', 'login']);
  }
}
