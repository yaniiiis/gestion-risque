import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationLimteComponent } from './modification-limte.component';

describe('ModificationLimteComponent', () => {
  let component: ModificationLimteComponent;
  let fixture: ComponentFixture<ModificationLimteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificationLimteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificationLimteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
