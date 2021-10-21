import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  data:Array<any>=[]
  constructor(private productsService: ProductService ) {
  }
  ngOnInit(): void {
    this.productsService.getProducts().subscribe( r => {
      this.data = r
  })

}
}
