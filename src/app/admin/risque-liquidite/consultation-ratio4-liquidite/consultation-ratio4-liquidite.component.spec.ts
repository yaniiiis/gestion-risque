import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationRatio4LiquiditeComponent } from './consultation-ratio4-liquidite.component';

describe('ConsultationRatio4LiquiditeComponent', () => {
  let component: ConsultationRatio4LiquiditeComponent;
  let fixture: ComponentFixture<ConsultationRatio4LiquiditeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationRatio4LiquiditeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationRatio4LiquiditeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
