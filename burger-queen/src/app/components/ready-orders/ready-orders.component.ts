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
  objOrder = new Order;
  constructor(private orderService : OrderService) { }

  ngOnInit(): void {
    /* this.orderService.getOrderReady(this.objOrder).subscribe((element) => {
      this.objOrder = element;
      console.log(element);
    }); */
  }
}
