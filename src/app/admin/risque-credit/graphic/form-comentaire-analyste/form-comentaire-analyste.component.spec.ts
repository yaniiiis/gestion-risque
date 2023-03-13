import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComentaireAnalysteComponent } from './form-comentaire-analyste.component';

describe('FormComentaireAnalysteComponent', () => {
  let component: FormComentaireAnalysteComponent;
  let fixture: ComponentFixture<FormComentaireAnalysteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComentaireAnalysteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormComentaireAnalysteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
