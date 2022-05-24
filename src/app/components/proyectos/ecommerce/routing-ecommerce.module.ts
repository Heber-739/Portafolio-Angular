import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce.component';
import { ReactiveFormsModule } from '@angular/forms';

const routEcommerce: Routes = [{ path: '', component: EcommerceComponent }];

@NgModule({
  declarations: [EcommerceComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routEcommerce),
  ],
  exports: [RouterModule],
})
export class RoutingEcommerceModule {}
