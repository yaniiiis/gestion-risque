import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationRatio4LiquiditeContentComponent } from './consultation-ratio4-liquidite-content.component';

describe('ConsultationRatio4LiquiditeContentComponent', () => {
  let component: ConsultationRatio4LiquiditeContentComponent;
  let fixture: ComponentFixture<ConsultationRatio4LiquiditeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationRatio4LiquiditeContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationRatio4LiquiditeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
