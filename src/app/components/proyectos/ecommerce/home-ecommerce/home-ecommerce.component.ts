import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-ecommerce',
  templateUrl: './home-ecommerce.component.html',
  styleUrls: ['./home-ecommerce.component.css'],
})
export class HomeEcommerceComponent implements OnInit {
  verTodo: boolean = false;
  itemList: any;
  starwars: any;
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get('assets/json/items.json').subscribe((data) => {
      this.itemList = data;
      localStorage.setItem('items', JSON.stringify(this.itemList));
    });
  }

  verMas() {
    this.verTodo = !this.verTodo;
  }
  nuevoPrecio(item: any) {
    let precio = parseInt(item.precio);
    let descuento = (100 - parseInt(item.descuento)) / 100;
    return Math.round(precio * descuento);
  }
}
