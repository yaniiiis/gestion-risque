import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesResqueClientComponent } from './gestion-des-resque-client.component';

describe('GestionDesResqueClientComponent', () => {
  let component: GestionDesResqueClientComponent;
  let fixture: ComponentFixture<GestionDesResqueClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDesResqueClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDesResqueClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
