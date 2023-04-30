import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationRatio3LiquiditeContentComponent } from './consultation-ratio3-liquidite-content.component';

describe('ConsultationRatio3LiquiditeContentComponent', () => {
  let component: ConsultationRatio3LiquiditeContentComponent;
  let fixture: ComponentFixture<ConsultationRatio3LiquiditeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationRatio3LiquiditeContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationRatio3LiquiditeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
