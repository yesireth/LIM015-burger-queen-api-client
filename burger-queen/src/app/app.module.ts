import { NgModule }           from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LogInComponent } from './components/log-in/log-in.component'
import { AdminProductsComponent } from './components/admin-products/admin-products.component'
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { ReadyOrdersComponent } from './components/ready-orders/ready-orders.component';
import { PendingOrdersComponent } from './components/pending-orders/pending-orders.component';
import { ButtonsComponent } from './components/buttons/buttons.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    UsersComponent,
    LogInComponent,
    ReadyOrdersComponent,
    PendingOrdersComponent,
    ButtonsComponent,
    AdminProductsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

