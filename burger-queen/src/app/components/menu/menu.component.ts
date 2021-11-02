import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService} from '../../services/products.service';
import { OrderService} from '../../services/orders.service';
import { ProductI , Order, OrderDetail} from '../../models/product-model'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  data: Array<any> = [];
  lunch: Array<any> = [];
  breakfast: Array<any> = [];
  base: number = 1;
  total: number = 0;
  orderForm = new FormGroup({
    userName: new FormControl('', Validators.required),
  });
  
  objOrder = new Order
  objOrderDetail = new OrderDetail
  constructor(private productsService: ProductService, private orderService : OrderService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((element) => {
      this.data = element;
      console.log(this.data);
    });
  }

  breakfastBtn() {
    this.breakfast = this.data.filter((itens) => itens.type === 'desayuno');
    this.lunch = [];
  }

  lunchBtn() {
    this.lunch = this.data.filter((itens) => itens.type === 'almuerzo');
    this.breakfast = [];
  }

  foodOrder(objProduct: ProductI) {
    //_id: '616f4e630a6b39650d4a3c65', name: 'hamburguesa', price: 8.5, image: '', type: 'almuerzo', …}
    this.objOrder.client = this.orderForm.value.userName; 
    if (this.objOrder.client.length === 0) {
      alert(' Por favor ingrese el nombre del cliente ');
    } else {
      const productsSelect = this.objOrder.products.find(element => element.product === objProduct._id);
      if (productsSelect === undefined) { //no existe
        this.objOrderDetail = new OrderDetail
        this.objOrderDetail.product =  objProduct._id;
        this.objOrderDetail.qty =  1;
        this.objOrderDetail.price =  objProduct.price;
        this.objOrderDetail.productName =  objProduct.name;
        
        this.objOrder.products.push(this.objOrderDetail);
        this.getTotal();
      }
    }
  }
  getTotal() {
    this.total = this.objOrder.products
      .map((item) => item.qty * item.price)
      .reduce((acc, item) => (acc += item), 0);
  }
  changeAmount(base: number, item: OrderDetail) {
    if (item.qty + base === 0) {
      this.deleteOrder(item.product);
    } else {
      item.qty += base;
    }
    this.getTotal();
    /* Item.amount = Item.amount + base */
  }

  deleteOrder(id: string) {
    this.objOrder.products = this.objOrder.products.filter(item => item.product !== id);
    this.getTotal();
  }

  cleanOrder() {
    this.total = 0;
    this.objOrder.products = [];
    this.objOrder.client = '';
  }

  SendOrder() {
   this.objOrder.userId="617186f99e71c8b29cb278c0";
   this.objOrder.status="pending"

   this.orderService.addOrders(this.objOrder).subscribe(
    data => {
      console.log(data)
      this.cleanOrder();
    },
    error => {
      console.log(error)
    })

  }
}
