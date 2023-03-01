import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreanceDouteuseEtProvisionChartComponent } from './creance-douteuse-et-provision-chart.component';

describe('CreanceDouteuseEtProvisionChartComponent', () => {
  let component: CreanceDouteuseEtProvisionChartComponent;
  let fixture: ComponentFixture<CreanceDouteuseEtProvisionChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreanceDouteuseEtProvisionChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreanceDouteuseEtProvisionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
