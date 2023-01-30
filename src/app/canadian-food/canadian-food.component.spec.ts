import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanadianFoodComponent } from './canadian-food.component';

describe('CanadianFoodComponent', () => {
  let component: CanadianFoodComponent;
  let fixture: ComponentFixture<CanadianFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanadianFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanadianFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
