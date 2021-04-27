import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierInfoBancaireComponent } from './modifier-info-bancaire.component';

describe('ModifierInfoBancaireComponent', () => {
  let component: ModifierInfoBancaireComponent;
  let fixture: ComponentFixture<ModifierInfoBancaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierInfoBancaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierInfoBancaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
