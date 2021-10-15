import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl, Validators, FormGroupName, FormControlName} from '@angular/forms'
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  logInForm = new FormGroup({
  email: new FormControl('',Validators.required),
  password : new FormControl('',Validators.required)

})
  constructor() { }

  ngOnInit(): void {
   
  }

   login(form:string) {
  alert('toxica')
    console.log(form)
  }

}

