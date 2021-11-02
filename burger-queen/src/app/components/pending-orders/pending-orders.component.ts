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
  objOrder = new Order
  constructor(private orderService : OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((element) => {
      this.orders = element;
      this.ordersFilter = this.orders.filter((itens) => itens.status === 'pending')
      console.log(this.orders);
    });
  }
  orderReady(id:string){
    this.objOrder.client="auksilio";
    this.objOrder.status="delivering";
    this.orderService.updateOrders(id,this.objOrder).subscribe(
      data => {
        this.ordersFilter = this.ordersFilter.filter(item => item._id !== id)
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
