import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StressTestDeuxCentComponent } from './stress-test-deux-cent.component';

describe('StressTestDeuxCentComponent', () => {
  let component: StressTestDeuxCentComponent;
  let fixture: ComponentFixture<StressTestDeuxCentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StressTestDeuxCentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StressTestDeuxCentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
