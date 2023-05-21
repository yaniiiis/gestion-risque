import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInputListComponent } from './my-input-list.component';

describe('MyInputListComponent', () => {
  let component: MyInputListComponent;
  let fixture: ComponentFixture<MyInputListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyInputListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyInputListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
