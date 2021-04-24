import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifContratComponent } from './modif-contrat.component';

describe('ModifContratComponent', () => {
  let component: ModifContratComponent;
  let fixture: ComponentFixture<ModifContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifContratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
