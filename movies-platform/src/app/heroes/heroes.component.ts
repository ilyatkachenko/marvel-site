import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';
import { HeroesService } from '../services/heroes/heroes.service';
import {Heroes} from "../services/heroes/heroes.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  animations: [
    trigger('fadeInUp', [
      state('in', style({transform: 'translateX(0)',opacity: '1'})),
      transition('void => *', [
        animate(800, keyframes([
          style({opacity: 0, transform: 'translate3d(0, 30%, 0)', offset: 0}),
          style({opacity: 0, transform: 'translate3d(0, 50%, 0)', offset: 0.5}),
          style({opacity: 1, transform: 'translateX(0)', offset: 1})
        ]))
      ]),
    ]),
    trigger('fadeInBanner', [
      state('in', style({opacity: '1'})),
      transition('void => *', [
        animate('1.5s 0.9s ease', keyframes([
          style({opacity: 0, offset: 0}),
          style({opacity: 0.5, offset: 0.5}),
          style({opacity: 1, offset: 1})
        ]))
      ]),
    ])
  ],
})
export class HeroesComponent implements OnInit {
  title:string = 'Heroes';
  observableHeroes: Observable<Heroes[]>;
  heroes: Heroes[];
  errorMessage: String;

  constructor(private HeroesService: HeroesService) { }

  ngOnInit() {
    this.observableHeroes = this.HeroesService.getHeroesWithObservable();
    this.observableHeroes.subscribe(
        heroes => this.heroes = heroes,
        error =>  this.errorMessage = <any>error);
  }

}
