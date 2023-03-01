import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KRIsDeChangeComponent } from './kris-de-change.component';

describe('KRIsDeChangeComponent', () => {
  let component: KRIsDeChangeComponent;
  let fixture: ComponentFixture<KRIsDeChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KRIsDeChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KRIsDeChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
