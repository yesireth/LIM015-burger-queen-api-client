import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private Url = "https://chamaburger.herokuapp.com/products"; // URL to web api
  private parameters = new  HttpParams();
  private token: any;

  constructor(private http: HttpClient) {  }
  getProducts(): Observable<any> {
    //definen los headers
    this.token = localStorage.getItem('token')
    const config = {
      headers: { token: this.token }
    };
    return this.http.get(this.Url, config)
  }
}
