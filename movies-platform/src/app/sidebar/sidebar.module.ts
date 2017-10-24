import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HeroesService } from '../services/heroes/heroes.service';
import { SidebarComponent } from './sidebar.component';


@NgModule({
    declarations: [
        SidebarComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
    ],
    providers: [HeroesService],
    exports: [ SidebarComponent ]
})
export class SidebarModule {}

