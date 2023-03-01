import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TauxDefautChartComponent } from './taux-defaut-chart.component';

describe('TauxDefautChartComponent', () => {
  let component: TauxDefautChartComponent;
  let fixture: ComponentFixture<TauxDefautChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TauxDefautChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TauxDefautChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
