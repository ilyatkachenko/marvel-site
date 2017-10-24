import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BannerService } from '../../services/banner/banner.service';
import { HttpModule } from '@angular/http';
import { BannerComponent } from './banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerComponent ],
      imports: [
        HttpModule,
        BrowserAnimationsModule
      ],
      providers: [BannerService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
