import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    alert("este evento es al inicializar la pantalla")
  }

  login() {
    alert("este evento es al dar click en iniciar sesion")
  }

}

