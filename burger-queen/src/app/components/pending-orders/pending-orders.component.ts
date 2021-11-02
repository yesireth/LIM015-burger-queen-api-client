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
  objOrder = new Order
  constructor(private orderService : OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((element) => {
      this.orders = element;
      console.log(this.orders);
    });
  }
  orderReady(id:string){
    this.objOrder.status="canceled";
    this.orderService.updateOrders(id,this.objOrder).subscribe(
      data => {
        this.orders = this.orders.filter(item => item._id !== id)
        console.log(data)
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
