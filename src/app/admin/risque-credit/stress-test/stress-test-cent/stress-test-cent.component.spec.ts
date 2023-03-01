import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StressTestCentComponent } from './stress-test-cent.component';

describe('StressTestCentComponent', () => {
  let component: StressTestCentComponent;
  let fixture: ComponentFixture<StressTestCentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StressTestCentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StressTestCentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
