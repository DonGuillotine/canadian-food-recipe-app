import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanadafoodDetailsComponent } from './canadafood-details.component';

describe('CanadafoodDetailsComponent', () => {
  let component: CanadafoodDetailsComponent;
  let fixture: ComponentFixture<CanadafoodDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanadafoodDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanadafoodDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
