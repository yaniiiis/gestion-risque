import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RisqueDeChangeComponent } from './risque-de-change.component';

describe('RisqueDeChangeComponent', () => {
  let component: RisqueDeChangeComponent;
  let fixture: ComponentFixture<RisqueDeChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RisqueDeChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RisqueDeChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
