import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationRatio3LiquiditeCommentaireComponent } from './consultation-ratio3-liquidite-commentaire.component';

describe('ConsultationRatio3LiquiditeCommentaireComponent', () => {
  let component: ConsultationRatio3LiquiditeCommentaireComponent;
  let fixture: ComponentFixture<ConsultationRatio3LiquiditeCommentaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationRatio3LiquiditeCommentaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationRatio3LiquiditeCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
