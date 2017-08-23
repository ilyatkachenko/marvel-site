import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeroesService } from '../services/heroes/heroes.service';
import {Heroes} from "../services/heroes/heroes.service";
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
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
