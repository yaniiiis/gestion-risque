import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationRapportKrisLiquiditeComponent } from './consultation-rapport-kris-liquidite.component';

describe('ConsultationRapportKrisLiquiditeComponent', () => {
  let component: ConsultationRapportKrisLiquiditeComponent;
  let fixture: ComponentFixture<ConsultationRapportKrisLiquiditeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationRapportKrisLiquiditeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationRapportKrisLiquiditeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
