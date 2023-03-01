import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepartitionParSecteurComponent } from './repartition-par-secteur.component';

describe('RepartitionParSecteurComponent', () => {
  let component: RepartitionParSecteurComponent;
  let fixture: ComponentFixture<RepartitionParSecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepartitionParSecteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepartitionParSecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
