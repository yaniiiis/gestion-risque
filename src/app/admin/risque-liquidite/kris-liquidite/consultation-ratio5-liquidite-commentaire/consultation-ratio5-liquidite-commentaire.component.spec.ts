import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationRatio5LiquiditeCommentaireComponent } from './consultation-ratio5-liquidite-commentaire.component';

describe('ConsultationRatio5LiquiditeCommentaireComponent', () => {
  let component: ConsultationRatio5LiquiditeCommentaireComponent;
  let fixture: ComponentFixture<ConsultationRatio5LiquiditeCommentaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationRatio5LiquiditeCommentaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationRatio5LiquiditeCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
