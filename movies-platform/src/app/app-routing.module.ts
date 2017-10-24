import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ComicsComponent } from './comics/comics.component';
import { MoviesComponent } from './movies/movies.component';
import { VideosComponent } from './videos/videos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { HeroesComponent } from './heroes/heroes.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'comics', component: ComicsComponent },
    { path: 'movies', component: MoviesComponent },
    { path: 'videos', component: VideosComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroes/:name', component: HeroComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
