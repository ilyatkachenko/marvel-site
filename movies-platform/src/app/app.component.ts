import { Component, Renderer } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

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
export class AppComponent {
  title: string = 'app';
  constructor(private renderer: Renderer) {}

  onDeactivate() {
    this.renderer.setElementProperty(document.body, "scrollTop", 0);
  }
}
