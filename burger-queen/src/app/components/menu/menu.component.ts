import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/products.service';
import{ Product} from '../../models/product-model'
interface Item {
  product: Product;
  amount: number;
  userName: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  data: Array<any> = [];
  lunch: Array<any> = [];
  breakfast: Array<any> = [];
  selectedItems: Item[] = [];
  base: number = 1;
  total: number = 0;
  orderForm = new FormGroup({
    userName: new FormControl('', Validators.required),
  });
  name: any = '';
  constructor(private productsService: ProductService) {}

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
  foodOrder(product: Product) {
    this.name = this.orderForm.value.userName;
    if (this.name.length === 0) {
      alert(' Po favor ingrese el nombre del cliente ');
    } else {
      const productsSelect = this.selectedItems.find(
        (element) => element.product._id === product._id
      );
      if (productsSelect === undefined) {
        this.selectedItems.push({ product, amount: 1, userName: this.name });
        console.log(this.selectedItems);
        this.getTotal();
      }
    }
  }
  getTotal() {
    this.total = this.selectedItems
      .map((item) => item.amount * item.product.price)
      .reduce((acc, item) => (acc += item), 0);
  }
  changeAmount(base: number, item: Item) {
    if (item.amount + base === 0) {
      this.deleteOrder(item.product._id);
    } else {
      item.amount += base;
    }
    this.getTotal();
    /* Item.amount = Item.amount + base */
  }
  deleteOrder(id: string) {
    this.selectedItems = this.selectedItems.filter(
      (item) => item.product._id !== id
    );
    this.getTotal();
  }
  Orderdelete() {
    this.total = 0;
    alert( this.name)
    this.selectedItems = [];
    this.name = '';
  }
  SendOrder() {
   // alert(this.name);
  }
}
