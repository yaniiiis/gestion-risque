import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationRatio2LiquiditeContentComponent } from './consultation-ratio2-liquidite-content.component';

describe('ConsultationRatio2LiquiditeContentComponent', () => {
  let component: ConsultationRatio2LiquiditeContentComponent;
  let fixture: ComponentFixture<ConsultationRatio2LiquiditeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationRatio2LiquiditeContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationRatio2LiquiditeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
