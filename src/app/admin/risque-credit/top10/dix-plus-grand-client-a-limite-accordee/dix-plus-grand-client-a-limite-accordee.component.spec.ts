import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DixPlusGrandClientALimiteAccordeeComponent } from './dix-plus-grand-client-a-limite-accordee.component';

describe('DixPlusGrandClientALimiteAccordeeComponent', () => {
  let component: DixPlusGrandClientALimiteAccordeeComponent;
  let fixture: ComponentFixture<DixPlusGrandClientALimiteAccordeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DixPlusGrandClientALimiteAccordeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DixPlusGrandClientALimiteAccordeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
