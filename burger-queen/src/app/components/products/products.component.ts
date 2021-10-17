import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public titulo: string;
  public comentario: string;
  public year: number;
  
  constructor() {
    this.titulo="hola soy un titulo";
    this.comentario= "este es un comentario";
    this.year= 2020;
    console.log(this.titulo,this.comentario,this.year);
  }

  ngOnInit(): void {
  }

}
