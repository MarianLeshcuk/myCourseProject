import { Component, OnInit, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  isShow: boolean = false;

  text: string = "Open";

  newHeight: false;

  newDisplay: true;

  constructor() { }

  ngOnInit() {
  }

  informationFieldShow() {
    this.isShow = true;
  }

  setNewHeight() {
    if(this.newHeight) {
      return "400px";// auto
    } else {
      return "";
    }
  }

  newTextVal() {
    if(this.text === "Open") {
      this.text = "Close"
    } else {
      this.text = "Open"
    }
  }

  setNewDisplay() {
    if(this.newDisplay) {
      return "block";
    } else {
      return "none";
    }
  }

}
