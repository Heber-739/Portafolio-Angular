import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingChohanModule } from './routing-chohan.module';
import { DadosMagicosService } from './dados';

@NgModule({
  declarations: [],
  imports: [CommonModule, RoutingChohanModule],
  providers: [DadosMagicosService],
})
export class ChohanModule {}
