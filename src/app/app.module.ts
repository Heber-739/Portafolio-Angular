import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { FooterComponent } from './footer/footer.component';
import { RoutingAppModule } from './routing-app.module';
import { LocalStorageService } from './local-storage.service';

@NgModule({
  declarations: [AppComponent, NavegacionComponent, FooterComponent],
  imports: [BrowserModule, RoutingAppModule],
  providers: [LocalStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
