import { Component, Renderer, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('on', style({
        transform: 'translateX(-173px)'
      })),
      state('off', style({
        transform: 'translateX(0)'
      })),
      transition('on => off', [
        animate('0.3s ease-in-out')
      ]),
      transition('off => on', [
        animate('0.3s ease-in-out')
      ])
    ]),
  ]
})
export class AppComponent implements OnInit{
  title: string = 'app';
  isActive: string;
  constructor(private renderer: Renderer, private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
}
