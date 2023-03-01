import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParTypeEngagementComponent } from './par-type-engagement.component';

describe('ParTypeEngagementComponent', () => {
  let component: ParTypeEngagementComponent;
  let fixture: ComponentFixture<ParTypeEngagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParTypeEngagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParTypeEngagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
