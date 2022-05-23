import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosComponent } from './proyectos.component';
import { EncriptadorComponent } from './encriptador/encriptador.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { ChohanComponent } from './chohan/chohan.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';

const appProyectRouts: Routes = [
  { path: '', component: ProyectosComponent },
  { path: 'encriptador', component: EncriptadorComponent },
  { path: 'ahorcado', component: AhorcadoComponent },
  { path: 'chohan', component: ChohanComponent },
  { path: 'ecommerce', component: EcommerceComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    EncriptadorComponent,
    AhorcadoComponent,
    ChohanComponent,
    EcommerceComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appProyectRouts),
    ReactiveFormsModule,
    ClipboardModule,
  ],
  exports: [RouterModule],
})
export class RoutingProyectosModule {}
