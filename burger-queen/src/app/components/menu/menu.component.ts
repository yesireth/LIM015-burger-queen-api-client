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
  accountant:number=0;

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
        this.selectedItems.push({product});
      }
    }
  }
  addToCounter(product:any){
    console.log(product)
    let items=this.selectedItems.map(element => {
      if(element.product._id ===product._id){
        this.accountant = this.accountant+1
        console.log(this.accountant)
      }else{
        this.accountant
      }
    })
    return items
  }
  removeTheCounter(product:any){
    let items=this.selectedItems.map(element => {
      if(element.product._id ===product._id){
        this.accountant = this.accountant-1
        console.log(this.accountant)
      }else{
        this.accountant
        console.log('hola')
      }
    })
    return items
  }
}
