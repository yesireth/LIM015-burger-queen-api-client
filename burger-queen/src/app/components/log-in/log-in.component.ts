import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl, Validators, FormGroupName, FormControlName} from '@angular/forms'
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
<<<<<<< HEAD
=======

>>>>>>> c0314b27ff4034a51279117c949542fdd44157cf
  response: any;
  logInForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })

  constructor(private AuthService: AuthService, private router:Router) {
  }
  ngOnInit(): void {
    this.checkLocalStorage();
  }
  checkLocalStorage(){
    if(localStorage.getItem('token')){
      this.router.navigate(['/menu'])
    }
  }
<<<<<<< HEAD
   login() {

    this.AuthService.Auth(this.logInForm.value).subscribe(
      data => {
        localStorage.setItem('token',data.token)
        console.log('success', data)
        this.router.navigate(['/menu'])
      },
      error => {
        if(error.status > 400){
        alert('Por favor verifIque los campos')
        }
        else if (error.status == 400){
          alert('Por favor complete los campos')
        }
      })
   } 
=======
  login() {
  this.AuthService.Auth(this.logInForm.value).subscribe(
    data => {
      localStorage.setItem('token',data.token)
      console.log('success', data)
      this.router.navigate(['/menu'])
    },
    error => {
      if(error.status > 400){
      alert('Por favor verifIque los campos')
      }
      else if (error.status == 400){
        alert('Por favor complete los campos')
      }
    })
  } 
>>>>>>> c0314b27ff4034a51279117c949542fdd44157cf
}
