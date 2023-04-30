import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationRatio3LiquiditeComponent } from './consultation-ratio3-liquidite.component';

describe('ConsultationRatio3LiquiditeComponent', () => {
  let component: ConsultationRatio3LiquiditeComponent;
  let fixture: ComponentFixture<ConsultationRatio3LiquiditeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationRatio3LiquiditeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationRatio3LiquiditeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
