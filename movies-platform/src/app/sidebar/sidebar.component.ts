import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import { DataService } from "../data.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('off', style({
        transform: 'translateX(173px)'
      })),
      state('on', style({
        transform: 'translateX(0)'
      })),
      transition('on => off', [
        animate('0.3s ease-in-out')
      ]),
      transition('off => on', [
        animate('0.3s ease-in-out')
      ])
    ]),
    trigger('slideClose', [
      state('off', style({
        transform: 'translateX(200%)',
        opacity: '0'
      })),
      state('on', style({
        transform: 'translateX(0)',
        opacity: '1'
      })),
      transition('on => off', [
        animate('0.3s ease-in-out', style({
          transform: 'translateX(200%)',
          opacity: '0'
        }))
      ]),
      transition('off => on', [
        animate('0.3s ease-in-out', style({
          transform: 'translateX(0)',
          opacity: '1'
        }))
      ])
    ])
  ],
  providers: [DataService]
})
export class SidebarComponent implements OnInit {

  constructor(private _navService:DataService) {}
  ngOnInit() {
    let sideMenu = document.getElementById('side-menu').offsetWidth;
  }

  @Input() count:string;
  @Input() isActive:string;

  @Output() isActiveChange = new EventEmitter<string>();
  onNameChange(model: string){
    this.isActive = model;
    this.isActiveChange.emit(model);
  }
}
