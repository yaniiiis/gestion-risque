import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationR2Component } from './consultation-r2.component';

describe('ConsultationR2Component', () => {
  let component: ConsultationR2Component;
  let fixture: ComponentFixture<ConsultationR2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationR2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationR2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
