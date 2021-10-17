import { NgModule }           from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LogInComponent } from './components/log-in/log-in.component'
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { ReadyOrdersComponent } from './components/ready-orders/ready-orders.component';
import { PendingOrdersComponent } from './components/pending-orders/pending-orders.component';
import { ButonsComponent } from './components/butons/butons.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    UsersComponent,
    LogInComponent,
    ReadyOrdersComponent,
    PendingOrdersComponent,
    ButonsComponent
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

