import { NgModule }           from '@angular/core';
import { FormsModule }        from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AdminProductsComponent } from './views/admin-products/admin-products.component';
import { AdminUsersComponent } from './views/admin-users/admin-users.component';
import { MenuComponent } from './views/menu/menu.component';
import { OrdersReadyComponent } from './views/orders-ready/orders-ready.component';
import { ReactiveFormsModule } from '@angular/forms';

import { LogInComponent } from './views/log-in/log-in.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    UsersComponent,
    OrdersComponent,
    AdminProductsComponent,
    AdminUsersComponent,
    MenuComponent,
    OrdersReadyComponent,
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

