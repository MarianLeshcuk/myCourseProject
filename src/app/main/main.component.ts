import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { Item } from '../models/item.model';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
  
    trigger('moveMainTopContent', [    
        transition('void => *', [
            animate(600, keyframes([
                style({opacity: 0, transform: 'translateY(-200px)', offset: 0}),
                style({opacity: 1, transform: 'translateY(25px)', offset: .75}),
                style({opacity: 1, transform: 'translateY(0)', offset: 1}),
            ]))
        ]),
    ]),

  trigger('focusMainTopContent', [
    state('inactive', style({
        height: '0px'
    })),
    state('active', style({
      height: '50vh'
    })),
    transition('inactive => active', animate('1.5s ease-out')),
    transition('active => inactive', animate('1.5s ease-in'))
   ]),
  
  ]
})
export class MainComponent implements OnInit {

  tiles = [
    {text: '', cols: 3, rows: 2, color: '#fff', url: "url(http://www.servcorp.com.sa/media/14532/banner-module-building-al-murjanah-tower-1500x500.jpg)", repeat: "no-repeat", size: "cover"},
    {text: '', cols: 1, rows: 3, color: '#40B1FA', url: "url(http://www.universaltaxation.com.au/wp-content/uploads/2016/06/buslodge500X500.jpg)", repeat: "no-repeat", size: "cover"},
    {text: '', cols: 1, rows: 1, color: '#40B1FA', url: "url(https://i.warosu.org/data/biz/img/0079/21/1519472652996.jpg)", repeat: "no-repeat", size: "cover"},
    {text: '', cols: 2, rows: 1, color: '#fff', url: "url(http://www.tati.in/images/sub_banner.jpg)", repeat: "no-repeat", size: "cover"},
  ];

  // @Input()
  item: Item;

  items: Item[] = [
    new Item("Title", "Desc", 300, "https://d1yupijb0jmhpf.cloudfront.net/72ef796c-ef3c-4067-adef-f10549d5707c.png"),
    new Item("Title", "Desc", 300, "https://d1yupijb0jmhpf.cloudfront.net/72ef796c-ef3c-4067-adef-f10549d5707c.png"),
    new Item("Title", "Desc", 300, "https://d1yupijb0jmhpf.cloudfront.net/72ef796c-ef3c-4067-adef-f10549d5707c.png")
]

  text: string = "Open";

  constructor() { }

  ngOnInit() {
  }

  newTextVal() {
    if(this.text === "Open") {
      this.text = "Close"
    } else {
      this.text = "Open"
    }
  }

  state: string = 'inactive';

  mainTopContentAnimation() {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }

}
