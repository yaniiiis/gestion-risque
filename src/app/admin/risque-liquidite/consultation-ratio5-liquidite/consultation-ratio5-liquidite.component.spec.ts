import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationRatio5LiquiditeComponent } from './consultation-ratio5-liquidite.component';

describe('ConsultationRatio5LiquiditeComponent', () => {
  let component: ConsultationRatio5LiquiditeComponent;
  let fixture: ComponentFixture<ConsultationRatio5LiquiditeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationRatio5LiquiditeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationRatio5LiquiditeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
