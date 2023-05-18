import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueCreationLimiteComponent } from './dialogue-creation-limite.component';

describe('DialogueCreationLimiteComponent', () => {
  let component: DialogueCreationLimiteComponent;
  let fixture: ComponentFixture<DialogueCreationLimiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogueCreationLimiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogueCreationLimiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
