import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
  
    trigger('movePanel', [    
        transition('void => *', [
            animate(600, keyframes([
                style({opacity: 0, transform: 'translateY(-200px)', offset: 0}),
                style({opacity: 1, transform: 'translateY(25px)', offset: .75}),
                style({opacity: 1, transform: 'translateY(0)', offset: 1}),
            ]))
        ]),
    ]),

  trigger('focusPanel', [
    state('inactive', style({
        height: '0px'
    })),
    state('active', style({
      height: '300px'
    })),
    transition('inactive => active', animate('1.5s ease-out')),
    transition('active => inactive', animate('1.5s ease-in'))
   ]),
  
  ]
})
export class MainComponent implements OnInit {

  tiles = [
    {text: 'One', cols: 3, rows: 2, color: '#fff'},
    {text: 'Two', cols: 1, rows: 3, color: '#40B1FA'},
    {text: 'Three', cols: 1, rows: 1, color: '#40B1FA'},
    {text: 'Four', cols: 2, rows: 1, color: '#fff'},
  ];

  // isShow: boolean = false;

  text: string = "Open";

  // newHeight: false;

  // newDisplay: true;

  constructor() { }

  ngOnInit() {
  }

  // informationFieldShow() {
  //   this.isShow = true;
  // }

  // setNewHeight() {
  //   if(this.newHeight) {
  //     return "400px";// auto
  //   } else {
  //     return "";
  //   }
  // }

  newTextVal() {
    if(this.text === "Open") {
      this.text = "Close"
    } else {
      this.text = "Open"
    }
  }

  // setNewDisplay() {
  //   if(this.newDisplay) {
  //     return "block";
  //   } else {
  //     return "none";
  //   } 
  // }

  state: string = 'inactive';

  newStateClick() {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }

}
