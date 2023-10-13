import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindYourTableComponent } from './find-your-table.component';

describe('FindYourTableComponent', () => {
  let component: FindYourTableComponent;
  let fixture: ComponentFixture<FindYourTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindYourTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindYourTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
