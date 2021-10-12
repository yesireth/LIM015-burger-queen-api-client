import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NavbarComponent } from './components/navbar/navbar.component';
import { HoliComponent } from './components/holi/holi.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HoliComponent
=======

@NgModule({
  declarations: [
    AppComponent
>>>>>>> upstream/loginAngular
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
