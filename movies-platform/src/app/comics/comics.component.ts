import { Component, OnInit, HostListener } from '@angular/core';
import { ComicsService } from '../services/comics/comics.service';
import {Comics} from "../services/comics/comics.service";
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss'],
  animations: [
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
export class ComicsComponent implements OnInit {
  title: string = "Comics list";
  promiseComics: Promise<Comics[]>;
  comics: Comics[];
  errorMessage: String;

  constructor(private ComicsService: ComicsService) { }

  ngOnInit() {
    this.promiseComics = this.ComicsService.getComicsWithPromise();
    this.promiseComics.then(
        comics => this.comics = comics,
        error =>  this.errorMessage = <any>error);
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let elements: any = document.getElementsByClassName("comics-wrap");
    let numberScroll: number = window.pageYOffset;

    for (let i = 3; i < elements.length; ++i) {
      let elementsOffset: number = elements[i].offsetTop - 300;
      if (numberScroll > elementsOffset) {
        elements[i].classList.add('active');
      }
    }
  }
}
