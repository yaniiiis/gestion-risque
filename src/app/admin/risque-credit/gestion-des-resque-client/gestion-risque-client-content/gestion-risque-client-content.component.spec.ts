import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionRisqueClientContentComponent } from './gestion-risque-client-content.component';

describe('GestionRisqueClientContentComponent', () => {
  let component: GestionRisqueClientContentComponent;
  let fixture: ComponentFixture<GestionRisqueClientContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionRisqueClientContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionRisqueClientContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
