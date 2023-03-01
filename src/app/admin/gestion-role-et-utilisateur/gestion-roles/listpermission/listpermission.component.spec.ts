import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpermissionComponent } from './listpermission.component';

describe('ListpermissionComponent', () => {
  let component: ListpermissionComponent;
  let fixture: ComponentFixture<ListpermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpermissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListpermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
