import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContratComponent } from './new-contrat.component';

describe('NewContratComponent', () => {
  let component: NewContratComponent;
  let fixture: ComponentFixture<NewContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewContratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
