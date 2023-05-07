import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationRatio4LiquiditeCommentaireComponent } from './consultation-ratio4-liquidite-commentaire.component';

describe('ConsultationRatio4LiquiditeCommentaireComponent', () => {
  let component: ConsultationRatio4LiquiditeCommentaireComponent;
  let fixture: ComponentFixture<ConsultationRatio4LiquiditeCommentaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationRatio4LiquiditeCommentaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationRatio4LiquiditeCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
