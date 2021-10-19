import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private Url = "https://chamaburger.herokuapp.com/auth"; // URL to web api
  private AuthObject = {
    "email": "",
   "password": ""
  }

  constructor(private http: HttpClient) {}
  Auth(user:any): Observable<any> {
    this.AuthObject["email"]= user.emails
    this.AuthObject["password"]= user.password
     return this.http.post(this.Url, this.AuthObject)
  }
}
