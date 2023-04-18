import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationTauxChangeContentComponent } from './evaluation-taux-change-content.component';

describe('EvaluationTauxChangeContentComponent', () => {
  let component: EvaluationTauxChangeContentComponent;
  let fixture: ComponentFixture<EvaluationTauxChangeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationTauxChangeContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationTauxChangeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
