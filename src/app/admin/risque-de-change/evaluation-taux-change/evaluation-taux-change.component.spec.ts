import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationTauxChangeComponent } from './evaluation-taux-change.component';

describe('EvaluationTauxChangeComponent', () => {
  let component: EvaluationTauxChangeComponent;
  let fixture: ComponentFixture<EvaluationTauxChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationTauxChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationTauxChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
