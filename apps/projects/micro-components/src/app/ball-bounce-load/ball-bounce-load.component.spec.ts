import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallBounceLoadComponent } from './ball-bounce-load.component';

describe('BallBounceLoadComponent', () => {
  let component: BallBounceLoadComponent;
  let fixture: ComponentFixture<BallBounceLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallBounceLoadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallBounceLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
