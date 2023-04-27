import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationRatio1LiquiditeContentComponent } from './consultation-ratio1-liquidite-content.component';

describe('ConsultationRatio1LiquiditeContentComponent', () => {
  let component: ConsultationRatio1LiquiditeContentComponent;
  let fixture: ComponentFixture<ConsultationRatio1LiquiditeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationRatio1LiquiditeContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationRatio1LiquiditeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
