import {Component, OnInit, HostListener, Inject} from '@angular/core';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';
import {HeroesService} from '../services/heroes/heroes.service';
import {Heroes} from "../services/heroes/heroes.service";
import {Observable} from 'rxjs';
import {DOCUMENT} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {Chart} from 'angular-highcharts';

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
        let number: number = this.document.body.scrollTop;

        for (let i = 0; i < elements.length; ++i) {
            let elementsOffset: number = elements[i].offsetTop - 300;
            if (number > elementsOffset) {
                elements[i].classList.add('active');
            }
        }
    }

    chart = new Chart({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Heroes powers rating'
        },
        xAxis: {
            categories: [
                'Intelligence',
                'Strength',
                'Speed',
                'Durability',
                'Energy Projection',
                'Fighting Skills'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            max: 7,
            title: {
                text: 'Rate'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Hawkeye',
            data: [3, 2, 2, 2, 1, 6]

        }, {
            name: 'Hulk',
            data: [6, 7, 3, 7, 5, 4]

        }, {
            name: 'Captain America',
            data: [3, 3, 2, 3, 1, 6]

        }, {
            name: 'Black Widow',
            data: [3, 3, 2, 3, 3, 6]

        }, {
            name: 'Iron Man',
            data: [6, 6, 5, 6, 6, 4]

        }, {
            name: 'Ihor',
            data: [2, 7, 7, 6, 6, 4]

        }]
    });
}
