import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ComicsService } from '../../services/comics/comics.service';
import { HttpModule } from '@angular/http';
import { LatestComicsComponent } from './latest-comics.component';

describe('LatestComicsComponent', () => {
  let component: LatestComicsComponent;
  let fixture: ComponentFixture<LatestComicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestComicsComponent ],
      imports: [
        HttpModule,
      ],
      providers: [ComicsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
