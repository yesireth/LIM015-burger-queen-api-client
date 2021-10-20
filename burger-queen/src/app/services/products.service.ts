import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private Url = "https://chamaburger.herokuapp.com/products"; // URL to web api
  private parameters = new  HttpParams();
  private headers = new HttpHeaders();
  private token: any;

  constructor(private http: HttpClient) {  }
  getProducts(): Observable<any> {
    //definen los headers
    this.token = localStorage.getItem('token')
    console.log(this.token)
    this.headers.set("Content-Type", 'application/json; charset=utf-8');
    this.headers.set("token", this.token);
    //definen parametros si hubiera
    //this.parameters.set('nombreparametro1','valorparametro1')
    // const headersss= new HttpHeaders({
    //   'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjQ1ZGNiZWZmMGQ3NGFlZTA5MTBkZiIsImlhdCI6MTYzNDc2NjU5MiwiZXhwIjoxNjM0ODUyOTkyfQ.pAsFqL5tizKOnZCgMz54aQxzYwsfIiADi45w0j4_J0M'
    // })
    return this.http.get(this.Url,{headers: this.headers})
  }
}
