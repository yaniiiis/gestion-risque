import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditNetComponent } from './credit-net.component';

describe('CreditNetComponent', () => {
  let component: CreditNetComponent;
  let fixture: ComponentFixture<CreditNetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditNetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditNetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
