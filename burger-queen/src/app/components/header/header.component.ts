import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    private result:any
  constructor(private router:Router){ }

  ngOnInit(): void {
  }

  clickAddTodo(){
    this.result=confirm('¿En serio quieres salir?')
    if(this.result){
      localStorage.clear();
      this.router.navigate([''])
    }
  }

}
