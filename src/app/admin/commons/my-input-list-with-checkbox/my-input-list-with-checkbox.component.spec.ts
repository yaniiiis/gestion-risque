import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInputListWithCheckboxComponent } from './my-input-list-with-checkbox.component';

describe('MyInputListWithCheckboxComponent', () => {
  let component: MyInputListWithCheckboxComponent;
  let fixture: ComponentFixture<MyInputListWithCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyInputListWithCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyInputListWithCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
