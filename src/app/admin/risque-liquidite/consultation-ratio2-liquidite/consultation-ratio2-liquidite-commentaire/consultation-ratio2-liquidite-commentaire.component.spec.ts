import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationRatio2LiquiditeCommentaireComponent } from './consultation-ratio2-liquidite-commentaire.component';

describe('ConsultationRatio2LiquiditeCommentaireComponent', () => {
  let component: ConsultationRatio2LiquiditeCommentaireComponent;
  let fixture: ComponentFixture<ConsultationRatio2LiquiditeCommentaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationRatio2LiquiditeCommentaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationRatio2LiquiditeCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
