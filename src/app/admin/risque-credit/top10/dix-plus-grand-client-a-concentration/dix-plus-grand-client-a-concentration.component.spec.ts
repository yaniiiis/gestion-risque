import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DixPlusGrandClientAConcentrationComponent } from './dix-plus-grand-client-a-concentration.component';

describe('DixPlusGrandClientAConcentrationComponent', () => {
  let component: DixPlusGrandClientAConcentrationComponent;
  let fixture: ComponentFixture<DixPlusGrandClientAConcentrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DixPlusGrandClientAConcentrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DixPlusGrandClientAConcentrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
