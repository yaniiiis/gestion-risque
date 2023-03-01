import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitesBanquesComponent } from './limites-banques.component';

describe('LimitesBanquesComponent', () => {
  let component: LimitesBanquesComponent;
  let fixture: ComponentFixture<LimitesBanquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimitesBanquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LimitesBanquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
