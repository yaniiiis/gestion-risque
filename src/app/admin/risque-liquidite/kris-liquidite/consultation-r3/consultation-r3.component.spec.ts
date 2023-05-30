import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationR3Component } from './consultation-r3.component';

describe('ConsultationR3Component', () => {
  let component: ConsultationR3Component;
  let fixture: ComponentFixture<ConsultationR3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationR3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationR3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
