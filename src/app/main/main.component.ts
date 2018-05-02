import { Component, OnInit, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  isShow: boolean = false;

  textOpen: string = "Open";
  textClose: string = "Close";
  text: string = "Open";

  newHeight: false;

  constructor() { }

  ngOnInit() {
  }

  informationFieldShow() {
    this.isShow = true;
  }

  setNewHeight() {
    if(this.newHeight) {
      return "300px";
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

}
