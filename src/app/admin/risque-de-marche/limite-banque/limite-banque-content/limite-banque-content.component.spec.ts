import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimiteBanqueContentComponent } from './limite-banque-content.component';

describe('LimiteBanqueContentComponent', () => {
  let component: LimiteBanqueContentComponent;
  let fixture: ComponentFixture<LimiteBanqueContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimiteBanqueContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LimiteBanqueContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
