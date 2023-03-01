import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DixPlusGrandClientAEngagementsComponent } from './dix-plus-grand-client-a-engagements.component';

describe('DixPlusGrandClientAEngagementsComponent', () => {
  let component: DixPlusGrandClientAEngagementsComponent;
  let fixture: ComponentFixture<DixPlusGrandClientAEngagementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DixPlusGrandClientAEngagementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DixPlusGrandClientAEngagementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
