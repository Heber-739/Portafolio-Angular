import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { EcommerceComponent } from './ecommerce.component';

const routEcommerce: Routes = [
  {
    path: '',
    component: EcommerceComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'administracion', component: AdminComponent },
    ],
  },
];

@NgModule({
  declarations: [
    EcommerceComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routEcommerce),
  ],
  exports: [RouterModule],
})
export class RoutingEcommerceModule {}
