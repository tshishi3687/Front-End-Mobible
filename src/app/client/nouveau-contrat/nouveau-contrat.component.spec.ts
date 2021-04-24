import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauContratComponent } from './nouveau-contrat.component';

describe('NouveauContratComponent', () => {
  let component: NouveauContratComponent;
  let fixture: ComponentFixture<NouveauContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauContratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
