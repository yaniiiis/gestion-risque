import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatioLiquiditeMensuelCommentaireComponent } from './ratio-liquidite-mensuel-commentaire.component';

describe('RatioLiquiditeMensuelCommentaireComponent', () => {
  let component: RatioLiquiditeMensuelCommentaireComponent;
  let fixture: ComponentFixture<RatioLiquiditeMensuelCommentaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatioLiquiditeMensuelCommentaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatioLiquiditeMensuelCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
