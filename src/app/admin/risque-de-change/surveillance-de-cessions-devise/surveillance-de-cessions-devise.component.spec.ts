import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveillanceDeCessionsDeviseComponent } from './surveillance-de-cessions-devise.component';

describe('SurveillanceDeCessionsDeviseComponent', () => {
  let component: SurveillanceDeCessionsDeviseComponent;
  let fixture: ComponentFixture<SurveillanceDeCessionsDeviseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveillanceDeCessionsDeviseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveillanceDeCessionsDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
