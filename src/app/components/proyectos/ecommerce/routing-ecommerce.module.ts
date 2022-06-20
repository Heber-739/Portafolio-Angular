import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CarritoComponent } from './carrito/carrito.component';
import { HomeEcommerceComponent } from './home-ecommerce/home-ecommerce.component';
import { HeaderEcommerceComponent } from './header-ecommerce/header-ecommerce.component';
import { FooterEcommerceComponent } from './footer-ecommerce/footer-ecommerce.component';
import { ProductoComponent } from './producto/producto.component';
import { UserComponent } from './user/user.component';
import { AuthService } from './login/Auth-Service.service';
import { CanActivateGuard } from './login/can-activate.guard';

const routEcommerce: Routes = [
  { path: '', component: HomeEcommerceComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent, canActivate: [CanActivateGuard] },
  { path: 'producto/:id', component: ProductoComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: '**', component: HomeEcommerceComponent },
];

@NgModule({
  declarations: [
    HomeEcommerceComponent,
    HeaderEcommerceComponent,
    ProductoComponent,
    LoginComponent,
    CarritoComponent,
    UserComponent,
    FooterEcommerceComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routEcommerce),
  ],
  exports: [RouterModule],
  providers: [AuthService],
})
export class RoutingEcommerceModule {}
