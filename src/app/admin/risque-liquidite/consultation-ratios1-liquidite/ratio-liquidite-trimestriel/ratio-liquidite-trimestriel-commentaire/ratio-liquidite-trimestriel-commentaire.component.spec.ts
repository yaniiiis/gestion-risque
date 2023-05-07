import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatioLiquiditeTrimestrielCommentaireComponent } from './ratio-liquidite-trimestriel-commentaire.component';

describe('RatioLiquiditeTrimestrielCommentaireComponent', () => {
  let component: RatioLiquiditeTrimestrielCommentaireComponent;
  let fixture: ComponentFixture<RatioLiquiditeTrimestrielCommentaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatioLiquiditeTrimestrielCommentaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatioLiquiditeTrimestrielCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
