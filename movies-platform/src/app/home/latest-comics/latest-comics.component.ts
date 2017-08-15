import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-latest-comics',
  templateUrl: './latest-comics.component.html',
  styleUrls: ['./latest-comics.component.scss']
})
export class LatestComicsComponent implements OnInit {
  url = "../assets/api/comics.json";
  promiseComics: Promise<Comics[]>;
  comics: Comics[];
  errorMessage: String;

  constructor(@Inject(DOCUMENT) private document: Document, private http:Http) { }

  getComicsWithPromise(): Promise<Comics[]> {
    return this.http.get(this.url).toPromise()
        .then(this.extractData)
        .catch(this.handleErrorPromise);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }

  private handleErrorPromise (error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }

  ngOnInit(): void {
    this.promiseComics = this.getComicsWithPromise();
    this.promiseComics.then(
        comics => this.comics = comics,
        error =>  this.errorMessage = <any>error);
    console.log(this.promiseComics);
  }

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

export class Comics {
  title: string;
  comics: string;
  constructor() {
  }
}


