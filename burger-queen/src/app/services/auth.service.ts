import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private Url = "https://fireburguer.herokuapp.com/auth"; // URL to web api
  private AuthObject = {
    "email": "admin@localhost",
   "password": "changeme"
  }

  constructor(private http: HttpClient) {}
  public Auth(){
    return this.http.post(this.Url, this.AuthObject).pipe(
      map(res => res.toString())
    )
  }
}
/*   yesireth8@gmail.com
  123456 */
    /* public getFrase(): Observable<Frase> {
    return this.http.get<Frase>(this.ChuckUrl);
  } */