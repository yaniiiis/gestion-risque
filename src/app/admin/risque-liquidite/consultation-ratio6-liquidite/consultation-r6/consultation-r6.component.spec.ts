import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationR6Component } from './consultation-r6.component';

describe('ConsultationR6Component', () => {
  let component: ConsultationR6Component;
  let fixture: ComponentFixture<ConsultationR6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationR6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationR6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
