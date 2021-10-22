import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/products.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  data:Array<any>=[];
  almuerzo1:Array<any>=[];
  constructor(private productsService: ProductService) { }
  ngOnInit(): void {
    this.productsService.getProducts().subscribe( r => {
      this.data = r
  })
  }
  desayuno(){

    this.productsService.getProducts().subscribe( r => {
      this.data = r
      this.almuerzo1 = this.data.filter(e=> e.type === 'almuerzo')
        console.log(this.almuerzo1)
  })

  }
  almuerzo(){
    alert('almuerzo')
    







    
  }
}
