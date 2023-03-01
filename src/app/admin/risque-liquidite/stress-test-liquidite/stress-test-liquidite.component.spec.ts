import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StressTestLiquiditeComponent } from './stress-test-liquidite.component';

describe('StressTestLiquiditeComponent', () => {
  let component: StressTestLiquiditeComponent;
  let fixture: ComponentFixture<StressTestLiquiditeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StressTestLiquiditeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StressTestLiquiditeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
