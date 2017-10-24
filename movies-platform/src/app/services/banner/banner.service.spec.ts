import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { BannerService } from './banner.service';

describe('BannerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BannerService],
      imports: [
        HttpModule,
      ],
    });
  });

  it('should be created', inject([BannerService], (service: BannerService) => {
    expect(service).toBeTruthy();
  }));
});
