import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveillenceDeTreoserieComponent } from './surveillence-de-treoserie.component';

describe('SurveillenceDeTreoserieComponent', () => {
  let component: SurveillenceDeTreoserieComponent;
  let fixture: ComponentFixture<SurveillenceDeTreoserieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveillenceDeTreoserieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveillenceDeTreoserieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
