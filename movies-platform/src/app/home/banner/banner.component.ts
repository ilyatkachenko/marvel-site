import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';
import { BannerService } from '../../services/banner/banner.service';
import {Banner} from "../../services/banner/banner.service";

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
  promiseBanner: Promise<Banner[]>;
  banner: Banner[];
  errorMessage: String;

  constructor( private BannerService: BannerService) { }

  ngOnInit(): void {
    this.promiseBanner = this.BannerService.getBannerWithPromise();
    this.promiseBanner.then(
        banner => this.banner = banner,
        error =>  this.errorMessage = <any>error);
  }
}
