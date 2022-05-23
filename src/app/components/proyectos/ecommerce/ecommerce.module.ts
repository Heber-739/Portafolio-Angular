import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce.component';

const rutas: Routes = [{ path: '', component: EcommerceComponent }];

@NgModule({
  declarations: [EcommerceComponent],
  imports: [CommonModule, RouterModule.forRoot(rutas)],
  exports: [RouterModule],
})
export class EcommerceModule {}
