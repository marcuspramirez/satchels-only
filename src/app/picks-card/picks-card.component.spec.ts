import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicksCardComponent } from './picks-card.component';

describe('PicksCardComponent', () => {
  let component: PicksCardComponent;
  let fixture: ComponentFixture<PicksCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicksCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicksCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
