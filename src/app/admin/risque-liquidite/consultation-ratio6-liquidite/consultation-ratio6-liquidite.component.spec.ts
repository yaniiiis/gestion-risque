import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationRatio6LiquiditeComponent } from './consultation-ratio6-liquidite.component';

describe('ConsultationRatio6LiquiditeComponent', () => {
  let component: ConsultationRatio6LiquiditeComponent;
  let fixture: ComponentFixture<ConsultationRatio6LiquiditeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationRatio6LiquiditeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationRatio6LiquiditeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
