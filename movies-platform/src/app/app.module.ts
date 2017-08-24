import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ScrollToModule} from 'ng2-scroll-to';

import { ComicsService } from './services/comics/comics.service';
import { BannerService } from './services/banner/banner.service';
import { MoviesService } from './services/movies/movies.service';
import { HeroesService } from './services/heroes/heroes.service';

import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ComicsComponent } from './comics/comics.component';
import { MoviesComponent } from './movies/movies.component';
import { VideosComponent } from './videos/videos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BannerComponent } from './home/banner/banner.component';
import { LatestComicsComponent } from './home/latest-comics/latest-comics.component';
import { LatestMoviesComponent } from './home/latest-movies/latest-movies.component';
import { LatestVideosComponent } from './home/latest-videos/latest-videos.component';
import { YoutubePipe } from './pipes/youtube/youtube.pipe';
import { HeroComponent } from './hero/hero.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'hero/:name', component: HeroComponent },
  { path: '**', component: NotFoundComponent }
];

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
    SidebarComponent,
    BannerComponent,
    LatestComicsComponent,
    LatestMoviesComponent,
    LatestVideosComponent,
    YoutubePipe,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    JsonpModule,
    ScrollToModule.forRoot(),
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ComicsService,BannerService,MoviesService,HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
