import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KRIsComponent } from './kris.component';

describe('KRIsComponent', () => {
  let component: KRIsComponent;
  let fixture: ComponentFixture<KRIsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KRIsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KRIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
