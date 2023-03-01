import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseQualitativeEtQuantitativeComponent } from './analyse-qualitative-et-quantitative.component';

describe('AnalyseQualitativeEtQuantitativeComponent', () => {
  let component: AnalyseQualitativeEtQuantitativeComponent;
  let fixture: ComponentFixture<AnalyseQualitativeEtQuantitativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyseQualitativeEtQuantitativeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyseQualitativeEtQuantitativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
