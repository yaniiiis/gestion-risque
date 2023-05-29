import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatioLiquiditeQuotidienCommentaireComponent } from './ratio-liquidite-quotidien-commentaire.component';

describe('RatioLiquiditeQuotidienCommentaireComponent', () => {
  let component: RatioLiquiditeQuotidienCommentaireComponent;
  let fixture: ComponentFixture<RatioLiquiditeQuotidienCommentaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatioLiquiditeQuotidienCommentaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatioLiquiditeQuotidienCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
