import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyValueOperandComponent } from './key-value-operand.component';

describe('KeyValueOperandComponent', () => {
  let component: KeyValueOperandComponent;
  let fixture: ComponentFixture<KeyValueOperandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyValueOperandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyValueOperandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
