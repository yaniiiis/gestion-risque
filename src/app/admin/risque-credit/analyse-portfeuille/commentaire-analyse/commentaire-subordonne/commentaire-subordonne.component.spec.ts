import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentaireSubordonneComponent } from './commentaire-subordonne.component';

describe('CommentaireSubordonneComponent', () => {
  let component: CommentaireSubordonneComponent;
  let fixture: ComponentFixture<CommentaireSubordonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentaireSubordonneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentaireSubordonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
