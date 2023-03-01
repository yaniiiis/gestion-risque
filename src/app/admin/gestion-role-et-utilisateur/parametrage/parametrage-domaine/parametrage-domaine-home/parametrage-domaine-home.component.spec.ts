import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrageDomaineHomeComponent } from './parametrage-domaine-home.component';

describe('ParametrageDomaineHomeComponent', () => {
  let component: ParametrageDomaineHomeComponent;
  let fixture: ComponentFixture<ParametrageDomaineHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametrageDomaineHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametrageDomaineHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
