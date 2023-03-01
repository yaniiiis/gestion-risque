import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StressTestCinquanteComponent } from './stress-test-cinquante.component';

describe('StressTestCinquanteComponent', () => {
  let component: StressTestCinquanteComponent;
  let fixture: ComponentFixture<StressTestCinquanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StressTestCinquanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StressTestCinquanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
