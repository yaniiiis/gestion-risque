import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KvooForEditComponent } from './kvoo-for-edit.component';

describe('KvooForEditComponent', () => {
  let component: KvooForEditComponent;
  let fixture: ComponentFixture<KvooForEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KvooForEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KvooForEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
