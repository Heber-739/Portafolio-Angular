import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'app-home-ecommerce',
  templateUrl: './home-ecommerce.component.html',
  styleUrls: ['./home-ecommerce.component.css'],
})
export class HomeEcommerceComponent implements OnInit {
  itemList: any;
  starwars: any;
  constructor(
    private httpClient: HttpClient,
    private localStorage: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.httpClient.get('assets/json/items.json').subscribe((data) => {
      this.itemList = data;
      this.localStorage.addItem('items', this.itemList);
    });
  }
  verProducto(array: string[], index: number) {}
}
