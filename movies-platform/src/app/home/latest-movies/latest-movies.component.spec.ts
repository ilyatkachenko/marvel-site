import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { MoviesService } from '../../services/movies/movies.service';
import { LatestMoviesComponent } from './latest-movies.component';

describe('LatestMoviesComponent', () => {
  let component: LatestMoviesComponent;
  let fixture: ComponentFixture<LatestMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestMoviesComponent ],
      imports: [
        HttpModule,
      ],
      providers: [MoviesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
