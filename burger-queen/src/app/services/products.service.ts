import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs'
import { ProductI } from '../models/product-model'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private Url = "https://fireburguer.herokuapp.com/products?limit=15"; // URL to web api
  private parameters = new  HttpParams();
  private token: any;
  private config:object;
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token')
    /* this.config = {
      headers: { token: this.token }
    }; */
    this.config = {
      headers: { Authorization: `Bearer ${this.token}` },
    };
  }

  getProducts(): Observable<any> {
    //definen los headers
    return this.http.get(this.Url,this.config)
  }

  postProducts(data:ProductI): Observable<any> {
    return this.http.post(this.Url,data,this.config)
  }

/*   deleteOneProducts(uid:any): Observable<any> {
    return this.http.delete("https://fireburguer.herokuapp.com/products?limit=15/"+uid,this.config)
  } */
}
