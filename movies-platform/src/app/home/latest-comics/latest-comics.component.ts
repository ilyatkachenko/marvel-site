import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-latest-comics',
  templateUrl: './latest-comics.component.html',
  styleUrls: ['./latest-comics.component.scss']
})
export class LatestComicsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let comicsOffset:number = document.getElementById('latest-comics').offsetTop - 300;
    let elements: NodeListOf<Element> = document.getElementsByClassName("comics");
    let number:number = this.document.body.scrollTop;
    if (number > comicsOffset) {
      for (let i = 0; i < elements.length; ++i) {
        elements[i].classList.add('active');
      }
    }
  }
}
