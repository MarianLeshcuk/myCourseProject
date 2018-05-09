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
        height: '0px',
        display: 'none'
    })),
    state('active', style({
      height: 'auto'
    })),
    transition('inactive => active', animate('.8s ease-out')),
    transition('active => inactive', animate('.8s ease-in'))
   ]),
  
  ]
})
export class MainComponent implements OnInit {

  tiles = [
    {text: '', cols: 3, rows: 2, color: '#fff', url: "url(http://www.servcorp.com.sa/media/14532/banner-module-building-al-murjanah-tower-1500x500.jpg)", repeat: "no-repeat", size: "cover"},
    {text: '', cols: 1, rows: 3, color: '#40B1FA', url: "url(http://www.universaltaxation.com.au/wp-content/uploads/2016/06/buslodge500X500.jpg)", repeat: "no-repeat", size: "cover"},
    {text: '', cols: 1, rows: 1, color: '#40B1FA', url: "url(https://i.warosu.org/data/biz/img/0079/21/1519472652996.jpg)", repeat: "no-repeat", size: "cover"},
    {text: '', cols: 2, rows: 1, color: '#fff', url: "url(http://www.tati.in/images/sub_banner.jpg)", repeat: "no-repeat", size: "cover"}
  ];

  // @Input()
  // item: Item;

  items: Item[] = [
    new Item("Office Building", "This building is one of our best projects", "http://urbantoronto.ca/sites/default/files/imagecache/display-default/images/articles/2011/12/4285/urbantoronto-4285-12916.jpg"),
    new Item("Hotel", "This building is one of our best projects", "http://thegeorges.com/wp-content/uploads/2015/04/our-buildings-marshall-copy.jpg"),
    new Item("Office Building", "This building is one of our best projects", "https://2omgsf3bzkiflvrl239x9vog-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/VIEW-1-2-1024x1024-500x500.jpg"),
    new Item("Shool", "This building is one of our best projects", "http://www.pooleanderson.com/wp-content/uploads/2015/07/Outreach-Innovation-Building-2-500x500.jpg"),
    new Item("Hotel", "This building is one of our best projects", "https://www.antoniopiosaracino.com/wp-content/uploads/2017/08/2-500x500.jpg"),
    new Item("Large Apartaments", "This building is one of our best projects", "http://www.pooleanderson.com/wp-content/uploads/2015/05/11-BAC-Juniata-College-21-500x500.jpg"),
    new Item("Office Center", "This building is one of our best projects", "http://lampshopping.ru/images/stories/virtuemart/product/bega/88994-01-anw.jpg"),
    new Item("Villa", "This building is one of our best projects", "https://latowels.co.uk/wp-content/uploads/2017/03/Holiday-Home-500x500.jpg")
]

  text: string = "Open";

  constructor() { }

  ngOnInit() {
  }

  newTextVal() {
    // if(this.text === "Open") {
    //   this.text = "Close"
    // } else {
    //   this.text = "Open"
    // }
    this.text = (this.text ==='Open' ? 'Close' : 'Open');
  }

  state: string = 'inactive';

  mainTopContentAnimation() {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }

}
