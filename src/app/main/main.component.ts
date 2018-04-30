import { Component, OnInit, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  isShow: boolean = false;

  toInfOpen: string = "Click To View More";
  toInfClose: string = "Click To Close";
  toInf: string = "";

  newHeight: false;

  constructor() { }

  ngOnInit() {
  }

  informationFieldShow() {
    this.isShow = true;
    this.toInf = this.toInfOpen;
  }

  informationFieldClose() {
    this.isShow = false;
  }

  informationFieldInfChange() {
    this.toInf = this.toInfClose;
  }

  setNewHeight() {
    if(this.newHeight) {
      return "150px";
    } else {
      return "";
    }
  }

  informationFieldShow2() {
    this.isShow = true;
    this.toInf = this.toInfClose;
  }

}
