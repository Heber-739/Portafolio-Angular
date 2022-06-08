import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'src/app/local-storage.service';

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
}
