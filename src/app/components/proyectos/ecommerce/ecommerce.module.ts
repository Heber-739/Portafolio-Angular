import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingEcommerceModule } from './routing-ecommerce.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, RoutingEcommerceModule, HttpClientModule],
})
export class EcommerceModule {}
