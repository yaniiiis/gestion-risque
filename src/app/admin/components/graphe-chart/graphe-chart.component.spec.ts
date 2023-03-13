import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrapheChartComponent } from './graphe-chart.component';

describe('GrapheChartComponent', () => {
  let component: GrapheChartComponent;
  let fixture: ComponentFixture<GrapheChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrapheChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrapheChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
