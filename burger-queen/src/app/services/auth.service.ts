import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private Url = "https://chamaburger.herokuapp.com/auth"; // URL to web api
  private AuthObject = {
    "email": "yesireth8@gmail.com",
   "password": "123456"
  }

  constructor(private http: HttpClient) {}
  public Auth(){
    // return this.http.post(this.Url, this.AuthObject).pipe(
    //   map(res => res.toString())
    // )
     return this.http.post(this.Url, this.AuthObject).subscribe( Response =>{
        return console.log(Response);
      
     })
  }
}
/*   yesireth8@gmail.com
  123456 */
    /* public getFrase(): Observable<Frase> {
    return this.http.get<Frase>(this.ChuckUrl);
  } */