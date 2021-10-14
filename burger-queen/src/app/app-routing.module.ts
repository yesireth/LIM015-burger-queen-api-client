import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './views/log-in/log-in.component';
import { AdminProductsComponent } from './views/admin-products/admin-products.component';
import { AdminUsersComponent } from './views/admin-users/admin-users.component';
import { MenuComponent } from './views/menu/menu.component';
import { OrdersReadyComponent } from './views/orders-ready/orders-ready.component';

const routes: Routes = [
  {path:'',component: LogInComponent},
  {path:'log-in',component: LogInComponent},
  {path:'admin-users',component:AdminUsersComponent},
  {path:'admin-products',component:AdminProductsComponent},
  {path:'menu',component:MenuComponent},
  {path:'orders-ready',component:OrdersReadyComponent}
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
