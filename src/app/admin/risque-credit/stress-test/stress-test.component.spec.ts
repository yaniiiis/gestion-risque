import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StressTestComponent } from './stress-test.component';

describe('StressTestComponent', () => {
  let component: StressTestComponent;
  let fixture: ComponentFixture<StressTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StressTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StressTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
