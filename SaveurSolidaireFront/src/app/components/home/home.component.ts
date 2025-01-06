import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
CurrentUserState=localStorage.getItem("currentUserstate") ;
role=localStorage.getItem("role") ;
  constructor() {
    this.CurrentUserState ;
    this.role ;
  }
  ngOnInit(): void {

  }
}
