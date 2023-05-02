import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationRatio6LiquiditeContentComponent } from './consultation-ratio6-liquidite-content.component';

describe('ConsultationRatio6LiquiditeContentComponent', () => {
  let component: ConsultationRatio6LiquiditeContentComponent;
  let fixture: ComponentFixture<ConsultationRatio6LiquiditeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationRatio6LiquiditeContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationRatio6LiquiditeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
