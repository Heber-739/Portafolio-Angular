import { Component, HostListener, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/local-storage.service';
import { AuthService } from '../login/Auth-Service.service';

@Component({
  selector: 'app-header-ecommerce',
  templateUrl: './header-ecommerce.component.html',
  styleUrls: ['./header-ecommerce.component.css'],
})
export class HeaderEcommerceComponent implements OnInit {
  itemList: any;
  logo: boolean = true;
  loginContainer: boolean = true;
  login: boolean = false;
  buscador: boolean = false;
  iconSearch: boolean = true;
  item: any;
  searchInput = new FormControl('', [Validators.required]);
  matches: any[];
  resize: number;

  constructor(
    private router: Router,
    private authService: AuthService,
    private localStorage: LocalStorageService
  ) {}
  ngOnInit(): void {
    this.itemList = this.localStorage.get('items');
    this.searchInput.valueChanges.subscribe((value) => {
      this.search(value);
    });
    this.login = this.authService.isLoggedMethod();
    this.authService.loginStatus$.subscribe((loggedStatus: boolean) => {
      this.login = loggedStatus;
    });
    this.headerResize();
  }
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    if (this.resize !== window.innerWidth) {
      this.headerResize();
    }
  }
  headerResize() {
    this.resize = window.innerWidth;
    if (this.resize >= 768) {
      this.logo = true;
      this.loginContainer = true;
      this.buscador = true;
    } else if (this.resize < 768) {
      this.buscador = false;
      this.iconSearch = true;
    }
  }

  redirigir(path: string) {
    if (path == 'login') {
      this.authService.urlIntentaAcceder = this.router.url;
    } else if (path == '') {
      this.searchInput.setValue('');
    }
    this.router.navigate(['proyectos', 'ecommerce', path]);
  }

  openSearch() {
    this.logo = !this.logo;
    this.loginContainer = !this.loginContainer;
    this.iconSearch = !this.iconSearch;
    this.buscador = !this.buscador;
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
    this.matches = newItemList;
  }
  logout() {
    this.authService.logout();
  }
}
