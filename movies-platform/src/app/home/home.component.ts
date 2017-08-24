import {Component, OnInit} from '@angular/core';
import {trigger, state, style, transition, animate, keyframes, query} from '@angular/animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    // animations: [
    //     trigger('routerAnimations', [
    //         transition('* => *', [
    //             query(':leave', style({ opacity:1 })),
    //             query(':enter', style({ opacity:0 })),
    //             query(':leave', animate('200ms', style({ opacity:0 }))),
    //             query(':enter', animate('200ms', style({ opacity:1 })))
    //         ])
    //     ])
    // ],
    // host: {'[@routerAnimations]': 'true'}
})
export class HomeComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
