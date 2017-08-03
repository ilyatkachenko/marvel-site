import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestComicsComponent } from './latest-comics.component';

describe('LatestComicsComponent', () => {
  let component: LatestComicsComponent;
  let fixture: ComponentFixture<LatestComicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestComicsComponent ]
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
