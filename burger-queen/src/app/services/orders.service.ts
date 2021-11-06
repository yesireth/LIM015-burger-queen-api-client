import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs'
import { ProductI,Order } from '../models/product-model'

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private Url = "https://fireburguer.herokuapp.com/orders";
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

  addOrders(data : Order): Observable<any> {
    return this.http.post(this.Url,data,this.config)
  }

  getOrders(): Observable<any> {
    return this.http.get(this.Url,this.config)
  }

  updateOrders(data:Order): Observable<any> {
    const body = {
        "status": "delivering"
    }
    return this.http.put(`${this.Url}/${data._id}`,body,this.config)
  }
  
  updateOrdersAgain(data:Order): Observable<any> {
    const body = {
        "status": "delivered"
    }
    return this.http.put(`${this.Url}/${data._id}`,body,this.config)
  }

  getOrderReady(uid:any){
    return this.http.get(`${this.Url}/${uid}`,this.config)
  }
//   deleteOrders(uid:any): Observable<any> {
//     return this.http.delete<Order>(this.Url,this.config)
//   }
}