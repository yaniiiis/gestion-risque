import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentaireEditorComponent } from './commentaire-editor.component';

describe('CommentaireEditorComponent', () => {
  let component: CommentaireEditorComponent;
  let fixture: ComponentFixture<CommentaireEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentaireEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentaireEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
