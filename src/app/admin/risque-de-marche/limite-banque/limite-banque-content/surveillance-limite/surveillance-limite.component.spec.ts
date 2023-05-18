import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveillanceLimiteComponent } from './surveillance-limite.component';

describe('SurveillanceLimiteComponent', () => {
  let component: SurveillanceLimiteComponent;
  let fixture: ComponentFixture<SurveillanceLimiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveillanceLimiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveillanceLimiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
