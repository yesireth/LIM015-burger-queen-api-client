import { Component, OnInit } from '@angular/core';
import { OrderService} from '../../services/orders.service';
import { Order } from '../../models/product-model';
@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.css']
})
export class PendingOrdersComponent implements OnInit {
  orders: Array<any> = [];
  ordersFilter: Array<any> = [];
  constructor(private orderService : OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((element) => {
      this.orders = element;
      this.ordersFilter = this.orders.filter((itens) => itens.status === 'pending')
      console.log(this.orders);
    });
  }
  orderReady(orderSelected: Order){
    orderSelected.status="delivering";
    this.orderService.updateOrders(orderSelected).subscribe(
      data => {
        this.ordersFilter = this.ordersFilter.filter(item => item._id !== orderSelected._id)
        console.log(this.ordersFilter)
      },
      error => {
        console.log(error)
      })
  }
  // cleanOrder(){
  //   this.orderService.deleteOrders(this.objOrder).subscribe((element) => {
  //     this.orders = element;
  //     console.log(this.orders);
  //   });
  // }
}
