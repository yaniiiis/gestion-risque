import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterDesUtilisateusComponent } from './ajouter-des-utilisateus.component';

describe('AjouterDesUtilisateusComponent', () => {
  let component: AjouterDesUtilisateusComponent;
  let fixture: ComponentFixture<AjouterDesUtilisateusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterDesUtilisateusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterDesUtilisateusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
