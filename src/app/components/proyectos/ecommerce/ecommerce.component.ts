import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css'],
})
export class EcommerceComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {
    this.route.navigate(['proyectos/ecommerce/home']);
  }
}
