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

  constructor(private productsService: ProductService) { }
  ngOnInit(): void {
    this.productsService.getProducts().subscribe(element => {
      this.data = element
    })
  }
  breakfastBtn(){
    this.breakfast = this.data.filter(items=> items.type === 'desayuno')
    this.data=[];
    console.log(this.breakfast)
  }
  lunchBtn(){
    this.lunch = this.data.filter(items=> items.type === 'almuerzo')
    console.log(this.lunch)
  }
  breakfastoOrder(breakfast:any){
    console.log(breakfast.name + " " + breakfast._id);
   return breakfast.name + " " + breakfast._id
  }

}
