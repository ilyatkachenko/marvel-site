import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('fadeInUp', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        animate(700, keyframes([
          style({opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 0}),
          style({opacity: 0.5, transform: 'translate3d(0, 50%, 0)', offset: 0}),
          style({opacity: 1, transform: 'none', offset: 1.0})
        ]))
      ]),
    ])
  ]
})
export class BannerComponent implements OnInit {
  constructor() { }

  ngOnInit() {}
}
