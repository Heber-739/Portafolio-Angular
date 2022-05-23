import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChohanComponent } from './chohan/chohan.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';

const appProyectRouts: Routes = [
  {
    path: 'ahorcado',
    loadChildren: () =>
      import('./ahorcado/ahorcado.module').then((m) => m.AhorcadoModule),
  },
  { path: 'chohan', component: ChohanComponent },
  { path: 'ecommerce', component: EcommerceComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [ChohanComponent, EcommerceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appProyectRouts),
    ReactiveFormsModule,
    ClipboardModule,
  ],
  exports: [RouterModule],
})
export class RoutingProyectosModule {}
