import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierInfoCotratComponent } from './modifier-info-cotrat.component';

describe('ModifierInfoCotratComponent', () => {
  let component: ModifierInfoCotratComponent;
  let fixture: ComponentFixture<ModifierInfoCotratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierInfoCotratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierInfoCotratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
