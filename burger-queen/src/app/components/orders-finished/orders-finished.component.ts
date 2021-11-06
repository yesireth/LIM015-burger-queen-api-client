import { Component, OnInit } from '@angular/core';
import { OrderService} from '../../services/orders.service';

@Component({
  selector: 'app-orders-finished',
  templateUrl: './orders-finished.component.html',
  styleUrls: ['./orders-finished.component.css']
})
export class OrdersFinishedComponent implements OnInit {
  orders: Array<any> = [];
  ordersFilter: Array<any> = [];
  constructor(private orderService : OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((element) => {
      this.orders = element;
      this.ordersFilter = this.orders.filter((item) => item.status === 'delivered')
      console.log(this.orders);
    });
  }
}
