import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBeneficiaireComponent } from './liste-beneficiaire.component';

describe('ListeBeneficiaireComponent', () => {
  let component: ListeBeneficiaireComponent;
  let fixture: ComponentFixture<ListeBeneficiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeBeneficiaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeBeneficiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
