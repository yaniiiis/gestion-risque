import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicateurTableComponent } from './indicateur-table.component';

describe('IndicateurTableComponent', () => {
  let component: IndicateurTableComponent;
  let fixture: ComponentFixture<IndicateurTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicateurTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicateurTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
