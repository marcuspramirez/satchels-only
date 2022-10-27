import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsTickerComponent } from './sports-ticker.component';

describe('SportsTickerComponent', () => {
  let component: SportsTickerComponent;
  let fixture: ComponentFixture<SportsTickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsTickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsTickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
