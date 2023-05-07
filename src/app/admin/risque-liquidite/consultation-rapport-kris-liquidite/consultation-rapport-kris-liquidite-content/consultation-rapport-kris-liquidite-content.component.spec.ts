import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationRapportKrisLiquiditeContentComponent } from './consultation-rapport-kris-liquidite-content.component';

describe('ConsultationRapportKrisLiquiditeContentComponent', () => {
  let component: ConsultationRapportKrisLiquiditeContentComponent;
  let fixture: ComponentFixture<ConsultationRapportKrisLiquiditeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationRapportKrisLiquiditeContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationRapportKrisLiquiditeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
