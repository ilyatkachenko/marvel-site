import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ScrollToModule} from 'ng2-scroll-to';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ComicsComponent } from './comics/comics.component';
import { MoviesComponent } from './movies/movies.component';
import { VideosComponent } from './videos/videos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DataService } from './data.service';
import { BannerComponent } from './home/banner/banner.component';
import { LatestComicsComponent } from './home/latest-comics/latest-comics.component';
import { LatestMoviesComponent } from './home/latest-movies/latest-movies.component';
import { LatestVideosComponent } from './home/latest-videos/latest-videos.component';
import { YoutubePipe } from './youtube.pipe';

const appRoutes: Routes = [
  { path: 'comics', component: ComicsComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'videos', component: VideosComponent },
  { path: '', component: HomeComponent },
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
    YoutubePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    ScrollToModule.forRoot(),
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
