import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ScrollToModule} from 'ng2-scroll-to';
import { AppRoutingModule } from './app-routing.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { ComicsService } from './services/comics/comics.service';
import { BannerService } from './services/banner/banner.service';
import { MoviesService } from './services/movies/movies.service';

import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ComicsComponent } from './comics/comics.component';
import { MoviesComponent } from './movies/movies.component';
import { VideosComponent } from './videos/videos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BannerComponent } from './home/banner/banner.component';
import { LatestComicsComponent } from './home/latest-comics/latest-comics.component';
import { LatestMoviesComponent } from './home/latest-movies/latest-movies.component';
import { LatestVideosComponent } from './home/latest-videos/latest-videos.component';
import { YoutubePipe } from './pipes/youtube/youtube.pipe';
import { HeroComponent } from './heroes/hero/hero.component';
import { ChartModule } from 'angular-highcharts';
import { HeroesComponent } from './heroes/heroes.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ComicsComponent,
    MoviesComponent,
    VideosComponent,
    NotFoundComponent,
    BannerComponent,
    LatestComicsComponent,
    LatestMoviesComponent,
    LatestVideosComponent,
    YoutubePipe,
    HeroComponent,
    HeroesComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    ChartModule,
    JsonpModule,
    ScrollToModule.forRoot(),
    AppRoutingModule,
    SidebarModule
  ],
  providers: [ComicsService,BannerService,MoviesService,YoutubePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
