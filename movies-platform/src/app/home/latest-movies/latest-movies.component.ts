import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-latest-movies',
  templateUrl: './latest-movies.component.html',
  styleUrls: ['./latest-movies.component.scss']
})
export class LatestMoviesComponent implements OnInit {
  url = "../assets/api/movies.json";
  promiseMovies: Promise<Movies[]>;
  movies: Movies[];
  errorMessage: String;

  constructor(@Inject(DOCUMENT) private document: Document, private http:Http) { }

  getMoviesWithPromise(): Promise<Movies[]> {
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
    this.promiseMovies = this.getMoviesWithPromise();
    this.promiseMovies.then(
        movies => this.movies = movies,
        error =>  this.errorMessage = <any>error);
    console.log(this.promiseMovies);
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

export class Movies {
  title: string;
  movies: string;
  constructor() {
  }
}