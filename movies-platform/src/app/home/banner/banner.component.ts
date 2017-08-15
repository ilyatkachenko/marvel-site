import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('fadeInUp', [
      state('in', style({transform: 'translateX(0)',opacity: '1'})),
      transition('void => *', [
        animate(800, keyframes([
          style({opacity: 0, transform: 'translate3d(0, 100%, 0)'}),
          style({opacity: 0, transform: 'translate3d(0, 70%, 0)'}),
          style({opacity: 1, transform: 'translateX(0)'})
        ]))
      ]),
    ])
  ]
})

export class BannerComponent implements OnInit {
  url = "../assets/api/banner.json";
  promiseBanner: Promise<Banner[]>;
  banner: Banner[];
  errorMessage: String;

  constructor(private http:Http) { }

  getBannerWithPromise(): Promise<Banner[]> {
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
    this.promiseBanner = this.getBannerWithPromise();
    this.promiseBanner.then(
        banner => this.banner = banner,
        error =>  this.errorMessage = <any>error);
  }
}

export class Banner {
  title: string;
  description: string;
  constructor() {
  }
}
