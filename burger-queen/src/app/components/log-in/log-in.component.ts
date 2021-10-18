import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, FormGroupName, FormControlName} from '@angular/forms'
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  response: any;
  logInForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })

  constructor(private AuthService: AuthService) {
  }
  ngOnInit(): void {
  }

   login() {
    this.AuthService.Auth(this.logInForm.value).subscribe( r =>{
      this.response = r;
      console.log(r.token)
     })
  }

}

