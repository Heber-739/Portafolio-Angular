import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CarritoComponent } from './carrito/carrito.component';
import { HomeEcommerceComponent } from './home-ecommerce/home-ecommerce.component';
import { HeaderEcommerceComponent } from './header-ecommerce/header-ecommerce.component';
import { FooterEcommerceComponent } from './footer-ecommerce/footer-ecommerce.component';

const routEcommerce: Routes = [
  { path: '', component: HomeEcommerceComponent },
  { path: 'login', component: LoginComponent },
  { path: 'administracion', component: AdminComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: '**', component: HomeEcommerceComponent },
];

@NgModule({
  declarations: [
    HomeEcommerceComponent,
    HeaderEcommerceComponent,
    LoginComponent,
    CarritoComponent,
    AdminComponent,
    FooterEcommerceComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routEcommerce),
  ],
  exports: [RouterModule],
})
export class RoutingEcommerceModule {}
