import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  login: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

  addElementToConsole() {
    if((this.login === 'admin') && (this.password === '123')){
    console.log("connected");
    alert('connected');
    localStorage.setItem('token', JSON.stringify({ login: this.login, password: this.password }));
   } else {
     alert('error');
   }
  }

}
