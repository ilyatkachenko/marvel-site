import { Component, OnInit, OnDestroy } from '@angular/core';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';
import { HeroesService } from '../../services/heroes/heroes.service';
import {Heroes} from "../../services/heroes/heroes.service";
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
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
        animate('2s 0.9s ease', keyframes([
          style({opacity: 0, offset: 0}),
          style({opacity: 0.5, offset: 0.5}),
          style({opacity: 1, offset: 1})
        ]))
      ]),
    ]),
    // trigger('fadeInAnimation', [
    //   // route 'enter' transition
    //   transition(':enter', [
    //
    //     // styles at start of transition
    //     style({ opacity: 0 }),
    //
    //     // animation and styles at end of transition
    //     animate('.3s', style({ opacity: 1 }))
    //   ]),
    // ])
  ],
  // host: { '[@fadeInAnimation]': '' }
})
export class HeroComponent implements OnInit, OnDestroy {
  observableHeroes: Observable<Heroes[]>;
  heroes: Heroes[];
  errorMessage: String;
  name: string;
  private subscription: Subscription;

  constructor(private HeroesService: HeroesService, private route: ActivatedRoute) {
    this.name = route.snapshot.params['name'];
    this.subscription = route.params.subscribe(params=>this.name = params['name']);
  }

  ngOnInit() {
    this.observableHeroes = this.HeroesService.getHeroesWithObservable();
    this.observableHeroes.subscribe(
        heroes => this.heroes = heroes,
        error =>  this.errorMessage = <any>error);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
