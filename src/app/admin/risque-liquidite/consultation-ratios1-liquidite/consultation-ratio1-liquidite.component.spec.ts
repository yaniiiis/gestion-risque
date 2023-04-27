import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationRatio1LiquiditeComponent } from './consultation-ratio1-liquidite.component';

describe('ConsultationRatio1LiquiditeComponent', () => {
  let component: ConsultationRatio1LiquiditeComponent;
  let fixture: ComponentFixture<ConsultationRatio1LiquiditeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationRatio1LiquiditeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationRatio1LiquiditeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
