import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabResearchesComponent } from './lab-researches.component';

describe('LabResearchesComponent', () => {
  let component: LabResearchesComponent;
  let fixture: ComponentFixture<LabResearchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabResearchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabResearchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
