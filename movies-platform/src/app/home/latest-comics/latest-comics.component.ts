import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { ComicsService } from '../../services/comics/comics.service';
import {Comics} from "../../services/comics/comics.service";

@Component({
  selector: 'app-latest-comics',
  templateUrl: './latest-comics.component.html',
  styleUrls: ['./latest-comics.component.scss']
})
export class LatestComicsComponent implements OnInit {

  promiseComics: Promise<Comics[]>;
  comics: Comics[];
  errorMessage: String;

  constructor(@Inject(DOCUMENT) private document: Document, private ComicsService: ComicsService) { }

  ngOnInit(): void {
    this.promiseComics = this.ComicsService.getComicsWithPromise();
    this.promiseComics.then(
        comics => this.comics = comics,
        error =>  this.errorMessage = <any>error);
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let comicsOffset:number = document.getElementById('latest-comics').offsetTop - 300;
    let elements: NodeListOf<Element> = document.getElementsByClassName("comics");
    let numberScroll:number = window.pageYOffset;
    if (numberScroll > comicsOffset) {
      for (let i = 0; i < elements.length; ++i) {
        elements[i].classList.add('active');
      }
    }
  }
}


