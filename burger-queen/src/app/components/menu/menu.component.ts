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
  base: number = 1;

  constructor(private productsService: ProductService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(element => {
      this.data = element
    })
  }
  breakfastBtn(){
      this.breakfast = this.data.filter(itens=> itens.type === 'desayuno')
      this.lunch=[]
  }
  lunchBtn(){
      this.lunch = this.data.filter(itens=> itens.type === 'almuerzo')
      this.breakfast=[]
  }
  foodOrder(product:any){
    if(this.selectedItems){
      let productsSelect = this.selectedItems.find(element => element.product._id ===product._id)
      if(productsSelect===undefined){
        this.selectedItems.push({product,amount:1});
      }
    }
  }
  changeAmount(base:number,item:any){
    item.amount += base
    /* Item.amount = Item.amount + base */
  }
}
