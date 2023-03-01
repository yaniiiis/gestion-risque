import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionDeRecouvermentComponent } from './action-de-recouverment.component';

describe('ActionDeRecouvermentComponent', () => {
  let component: ActionDeRecouvermentComponent;
  let fixture: ComponentFixture<ActionDeRecouvermentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionDeRecouvermentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionDeRecouvermentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
