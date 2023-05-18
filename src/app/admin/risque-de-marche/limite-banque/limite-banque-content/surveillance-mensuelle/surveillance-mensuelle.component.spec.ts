import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveillanceMensuelleComponent } from './surveillance-mensuelle.component';

describe('SurveillanceMensuelleComponent', () => {
  let component: SurveillanceMensuelleComponent;
  let fixture: ComponentFixture<SurveillanceMensuelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveillanceMensuelleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveillanceMensuelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
