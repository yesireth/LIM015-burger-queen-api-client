import { NgModule }           from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { OrdersComponent } from './components/orders/orders.component';

import { LogInComponent } from './components/log-in/log-in.component'


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    UsersComponent,
    OrdersComponent,
    LogInComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

