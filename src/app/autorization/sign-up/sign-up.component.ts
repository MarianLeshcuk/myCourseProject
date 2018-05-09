import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  login: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

  addElementToConsole() {
    console.log("connected");
    alert(this.login + ' was created');
    localStorage.setItem('token', JSON.stringify({ login: this.login, password: this.password }));
  }

}
