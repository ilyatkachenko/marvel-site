import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroesService {
  url = "../assets/api/heroes.json";

  constructor(private http:Http) { }

  getHeroesWithObservable(): Observable<Heroes[]> {
    return this.http.get(this.url)
        .map(this.extractData)
        .catch(this.handleErrorObservable);
  }

  private extractData(res: Response) {
    let body = res.json().heroes;
    console.log("ololo", body);
    return body;
  }

  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}

export class Heroes {
  name : string;
  title : string;
  img : string;
  icon : string;

  constructor() {
  }
}
