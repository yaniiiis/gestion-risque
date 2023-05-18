import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimiteBanqueComponent } from './limite-banque.component';

describe('LimiteBanqueComponent', () => {
  let component: LimiteBanqueComponent;
  let fixture: ComponentFixture<LimiteBanqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimiteBanqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LimiteBanqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
