import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenSatchelComponent } from './open-satchel.component';

describe('OpenSatchelComponent', () => {
  let component: OpenSatchelComponent;
  let fixture: ComponentFixture<OpenSatchelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenSatchelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenSatchelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
