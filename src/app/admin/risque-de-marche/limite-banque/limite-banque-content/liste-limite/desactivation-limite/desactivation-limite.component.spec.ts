import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesactivationLimiteComponent } from './desactivation-limite.component';

describe('DesactivationLimiteComponent', () => {
  let component: DesactivationLimiteComponent;
  let fixture: ComponentFixture<DesactivationLimiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesactivationLimiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesactivationLimiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
