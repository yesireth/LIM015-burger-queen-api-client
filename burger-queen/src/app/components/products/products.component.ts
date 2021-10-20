import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public titulo: string;
  public comentario: string;
  public year: number;
  
  constructor(private productsService: ProductService ) {
    this.titulo="hola soy un titulo";
    this.comentario= "este es un comentario";
    this.year= 2020;
    console.log(this.titulo,this.comentario,this.year);
  }

  ngOnInit(): void {
    alert("se carga ngOnInit ProductsComponent!!!!!!!!!!!!!!!!")
    this.productsService.getProducts().subscribe( r => {
      console.log(r)
    })
  }

}
