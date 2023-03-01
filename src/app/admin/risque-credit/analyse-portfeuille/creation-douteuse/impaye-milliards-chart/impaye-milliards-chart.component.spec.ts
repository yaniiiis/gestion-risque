import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpayeMilliardsChartComponent } from './impaye-milliards-chart.component';

describe('ImpayeMilliardsChartComponent', () => {
  let component: ImpayeMilliardsChartComponent;
  let fixture: ComponentFixture<ImpayeMilliardsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpayeMilliardsChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpayeMilliardsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
