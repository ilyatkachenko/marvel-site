import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-latest-movies',
  templateUrl: './latest-movies.component.html',
  styleUrls: ['./latest-movies.component.scss']
})
export class LatestMoviesComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let comicsOffset:number = document.getElementById('latest-movies').offsetTop - 300;
    let elements: NodeListOf<Element> = document.getElementsByClassName("movie");
    let number:number = this.document.body.scrollTop;
    if (number > comicsOffset) {
      for (let i = 0; i < elements.length; ++i) {
        elements[i].classList.add('active');
      }
    }
  }
}
