import {Component, Input, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import { HeroesService } from '../services/heroes/heroes.service';
import {Heroes} from "../services/heroes/heroes.service";
import { Observable } from 'rxjs';

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
  ]
})

export class SidebarComponent implements OnInit {
  observableHeroes: Observable<Heroes[]>;
  heroes: Heroes[];
  errorMessage: String;

  constructor(private HeroesService: HeroesService) {}

  ngOnInit() {
    this.observableHeroes = this.HeroesService.getHeroesWithObservable();
    this.observableHeroes.subscribe(
        heroes => this.heroes = heroes,
        error =>  this.errorMessage = <any>error);
  }

  @Input() count:string;
  @Input() isActive:string;

  @Output() isActiveChange = new EventEmitter<string>();
  onNameChange(model: string){
    this.isActive = model;
    this.isActiveChange.emit(model);

    let elOff: NodeListOf<Element> = document.getElementsByClassName("button-toggle");

    if(model == 'off'){
      elOff[0].classList.remove('active');
    }
  }
}
