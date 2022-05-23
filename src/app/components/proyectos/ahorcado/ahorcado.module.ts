import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasDirective } from './canvas.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from './ahorcado.component';

const rutas: Routes = [{ path: '', component: AhorcadoComponent }];

@NgModule({
  declarations: [CanvasDirective, AhorcadoComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forRoot(rutas)],
  exports: [RouterModule],
})
export class AhorcadoModule {}
