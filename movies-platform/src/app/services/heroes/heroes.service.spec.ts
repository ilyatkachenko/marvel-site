import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { HeroesService } from './heroes.service';

describe('HeroesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroesService],
      imports: [
        HttpModule,
      ],
    });
  });

  it('should be created', inject([HeroesService], (service: HeroesService) => {
    expect(service).toBeTruthy();
  }));
});
