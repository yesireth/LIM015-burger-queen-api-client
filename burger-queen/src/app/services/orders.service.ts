import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs'
import { ProductI,Order } from '../models/product-model'

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private Url = "https://chamaburger.herokuapp.com/orders";
  private token: any;
  private config:object;
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token')
    this.config = {
      headers: { token: this.token }
    };
  }

  addOrders(data : Order): Observable<any> {
    console.log(data)
    return this.http.post(this.Url,data,this.config)
  }

}
