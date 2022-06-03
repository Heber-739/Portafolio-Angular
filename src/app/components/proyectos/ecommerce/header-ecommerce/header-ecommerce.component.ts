import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-ecommerce',
  templateUrl: './header-ecommerce.component.html',
  styleUrls: ['./header-ecommerce.component.css'],
})
export class HeaderEcommerceComponent implements OnInit, AfterViewInit {
  @Input() itemList: any;
  buscador: boolean = false;
  item: any;
  searchInput = new FormControl('', [Validators.required]);
  matches: any[];

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.searchInput.valueChanges.subscribe((value) => {
      this.search(value);
    });
  }

  ngAfterViewInit(): void {}

  redirigir(path: string) {
    this.router.navigate(['proyectos', 'ecommerce', path]);
  }

  openSearch() {
    this.buscador = !this.buscador;
    console.log(this.itemList);
  }
  search(value: any) {
    let newItemList: string[] = [];
    if (value.length >= 2) {
      for (let index = 0; index < this.itemList.length; index++) {
        let element = this.itemList[index].array;
        for (let i = 0; i < element.length; i++) {
          const elem2 = element[i].nombre.toUpperCase();
          if (elem2.includes(value.toUpperCase())) {
            newItemList.push(element[i]);
          }
        }
      }
    }
    console.log(newItemList);
    this.matches = newItemList;
  }
}
