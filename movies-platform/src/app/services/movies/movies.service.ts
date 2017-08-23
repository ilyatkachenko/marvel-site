import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MoviesService {
  url = "../assets/api/movies.json";

  constructor(private http:Http) { }

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
}

export class Movies {
  title: string;
  movies: string;
  constructor() {
  }
}