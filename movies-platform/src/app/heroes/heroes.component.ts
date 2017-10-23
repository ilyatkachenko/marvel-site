import {Component, OnInit, HostListener, Inject} from '@angular/core';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';
import {HeroesService} from '../services/heroes/heroes.service';
import {Heroes} from "../services/heroes/heroes.service";
import {Observable} from 'rxjs';
import {DOCUMENT} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss'],
    animations: [
        trigger('fadeInUp', [
            state('in', style({transform: 'translateX(0)', opacity: '1'})),
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
    title: string = 'Heroes';
    chartTitle: string = 'chart';
    observableHeroes: Observable<Heroes[]>;
    heroes: Heroes[];
    errorMessage: String;

    constructor(private router: Router, private HeroesService: HeroesService, @Inject(DOCUMENT) private document: Document) {
    }

    ngOnInit() {
        this.observableHeroes = this.HeroesService.getHeroesWithObservable();
        this.observableHeroes.subscribe(
            heroes => this.heroes = heroes,
            error => this.errorMessage = <any>error);
    }

    onSelect(hero: string) {
        this.router.navigate(['/heroes', hero]);
    }

    @HostListener("window:scroll", [])
    onWindowScroll() {
        let elements: any = document.getElementsByClassName("hero-wrap");
        let numberScroll: number = window.pageYOffset;

        for (let i = 0; i < elements.length; ++i) {
            let elementsOffset: number = elements[i].offsetTop - 300;
            if (numberScroll > elementsOffset) {
                elements[i].classList.add('active');
            }
        }
    }
}
