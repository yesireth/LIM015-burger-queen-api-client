import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    UsersComponent,
    OrdersComponent,
    AdminProductsComponent,
    AdminUsersComponent,
    MenuComponent,
    OrdersReadyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

