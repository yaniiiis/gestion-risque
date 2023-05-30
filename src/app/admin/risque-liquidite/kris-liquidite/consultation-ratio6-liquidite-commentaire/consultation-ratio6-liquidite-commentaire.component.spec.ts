import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationRatio6LiquiditeCommentaireComponent } from './consultation-ratio6-liquidite-commentaire.component';

describe('ConsultationRatio6LiquiditeCommentaireComponent', () => {
  let component: ConsultationRatio6LiquiditeCommentaireComponent;
  let fixture: ComponentFixture<ConsultationRatio6LiquiditeCommentaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationRatio6LiquiditeCommentaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationRatio6LiquiditeCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
