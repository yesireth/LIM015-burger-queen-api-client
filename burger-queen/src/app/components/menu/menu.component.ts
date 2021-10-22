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
    this.productsService.getProducts().subscribe( element => {
      this.data = element
      this.breakfast = this.data.filter(itens=> itens.type === 'desayuno')
        console.log(this.breakfast)
    })
  }
  lunchBtn(){
    this.productsService.getProducts().subscribe( element => {
      this.data = element
      this.lunch = this.data.filter(itens=> itens.type === 'almuerzo')
        console.log(this.lunch)
    })
  }
}
