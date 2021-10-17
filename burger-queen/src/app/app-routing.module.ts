import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { MenuComponent } from './components/menu/menu.component';
import { PendingOrdersComponent } from './components/pending-orders/pending-orders.component';
import { ReadyOrdersComponent } from './components/ready-orders/ready-orders.component';

const routes: Routes = [
{path:'',component: LogInComponent},
{path:'admin-users',component:AdminUsersComponent},
{path:'admin-products',component:AdminProductsComponent},
{path:'menu',component:MenuComponent},
{path:'pending-orders',component:PendingOrdersComponent},
{path:'ready-orders',component:ReadyOrdersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
