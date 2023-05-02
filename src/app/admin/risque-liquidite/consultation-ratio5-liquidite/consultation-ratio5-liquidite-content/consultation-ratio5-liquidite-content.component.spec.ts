import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationRatio5LiquiditeContentComponent } from './consultation-ratio5-liquidite-content.component';

describe('ConsultationRatio5LiquiditeContentComponent', () => {
  let component: ConsultationRatio5LiquiditeContentComponent;
  let fixture: ComponentFixture<ConsultationRatio5LiquiditeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationRatio5LiquiditeContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationRatio5LiquiditeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
