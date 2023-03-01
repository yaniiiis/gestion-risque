import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrageIndirectComponent } from './parametrage-indirect.component';

describe('ParametrageIndirectComponent', () => {
  let component: ParametrageIndirectComponent;
  let fixture: ComponentFixture<ParametrageIndirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametrageIndirectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametrageIndirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
