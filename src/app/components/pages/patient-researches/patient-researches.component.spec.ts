import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientResearchesComponent } from './patient-researches.component';

describe('PatientResearchesComponent', () => {
  let component: PatientResearchesComponent;
  let fixture: ComponentFixture<PatientResearchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatientResearchesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientResearchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
