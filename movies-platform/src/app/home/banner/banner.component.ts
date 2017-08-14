import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('fadeInUp', [
      state('in', style({transform: 'translateX(0)',opacity: '1'})),
      transition('void => *', [
        animate(800, keyframes([
          style({opacity: 0, transform: 'translate3d(0, 100%, 0)'}),
          style({opacity: 0, transform: 'translate3d(0, 70%, 0)'}),
          style({opacity: 1, transform: 'translateX(0)'})
        ]))
      ]),
    ])
  ]
})
export class BannerComponent implements OnInit {
  constructor() { }

  ngOnInit() {}
}
