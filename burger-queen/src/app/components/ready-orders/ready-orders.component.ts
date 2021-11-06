import { Component, OnInit } from '@angular/core';
import { OrderService} from '../../services/orders.service';
import { Order } from '../../models/product-model';

@Component({
  selector: 'app-ready-orders',
  templateUrl: './ready-orders.component.html',
  styleUrls: ['./ready-orders.component.css']
})
export class ReadyOrdersComponent implements OnInit {
  orders: Array<any> = [];
  ordersFilter: Array<any> = [];
  constructor(private orderService : OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((element) => {
      this.orders = element;
      this.ordersFilter = this.orders.filter((item) => item.status === 'delivering')
      console.log(this.orders);
    });
  }
  orderFinished(orderSelected: Order){
  /*   orderSelected.status="delivered"; */
    this.orderService.updateOrdersAgain(orderSelected).subscribe(
      data => {
        this.ordersFilter = this.ordersFilter.filter(item => item._id !== orderSelected._id)
        console.log(this.ordersFilter)
      },
      error => {
        console.log(error)
      })
  }
}
