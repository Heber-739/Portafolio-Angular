import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from './ahorcado.component';
import { ReactiveFormsModule } from '@angular/forms';

const routAhorcado: Routes = [{ path: '', component: AhorcadoComponent }];

@NgModule({
  declarations: [AhorcadoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routAhorcado),
    ReactiveFormsModule,
  ],
})
export class RoutingAhorcadoModule {}
