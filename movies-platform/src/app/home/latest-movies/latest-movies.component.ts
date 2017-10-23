import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { MoviesService } from '../../services/movies/movies.service';
import {Movies} from "../../services/movies/movies.service";

@Component({
  selector: 'app-latest-movies',
  templateUrl: './latest-movies.component.html',
  styleUrls: ['./latest-movies.component.scss']
})
export class LatestMoviesComponent implements OnInit {
  promiseMovies: Promise<Movies[]>;
  movies: Movies[];
  errorMessage: String;

  constructor(@Inject(DOCUMENT) private document: Document, private MoviesService: MoviesService) { }

  ngOnInit(): void {
    this.promiseMovies = this.MoviesService.getMoviesWithPromise();
    this.promiseMovies.then(
        movies => this.movies = movies,
        error =>  this.errorMessage = <any>error);
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let comicsOffset:number = document.getElementById('latest-movies').offsetTop - 300;
    let elements: NodeListOf<Element> = document.getElementsByClassName("movie");
    let numberScroll:number = window.pageYOffset;
    if (numberScroll > comicsOffset) {
      for (let i = 0; i < elements.length; ++i) {
        elements[i].classList.add('active');
      }
    }
  }
}