import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StressTestContentComponent } from './stress-test-content.component';

describe('StressTestContentComponent', () => {
  let component: StressTestContentComponent;
  let fixture: ComponentFixture<StressTestContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StressTestContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StressTestContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
