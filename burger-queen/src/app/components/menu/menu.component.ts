import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/products.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  data:Array<any>=[];
  lunch:Array<any>=[];
  breakfast:Array<any>=[];
  selectedItems: any[] = [];
  constructor(private productsService: ProductService) { }
  ngOnInit(): void {
    this.productsService.getProducts().subscribe(element => {
      this.data = element
    })
  }
  breakfastBtn(){
      this.breakfast = this.data.filter(itens=> itens.type === 'desayuno')
      this.lunch = []
     // console.log(this.lunch)
  }
  lunchBtn(){
      this.lunch = this.data.filter(itens=> itens.type === 'almuerzo')
      this.breakfast = []
      console.log(this.breakfast)
  }
  breakfastoOrder(product:object){
    this.selectedItems.push({product});
    console.log(this.selectedItems);
  }
}
