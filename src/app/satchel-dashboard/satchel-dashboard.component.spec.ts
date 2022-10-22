import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatchelDashboardComponent } from './satchel-dashboard.component';

describe('SatchelDashboardComponent', () => {
  let component: SatchelDashboardComponent;
  let fixture: ComponentFixture<SatchelDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatchelDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SatchelDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
