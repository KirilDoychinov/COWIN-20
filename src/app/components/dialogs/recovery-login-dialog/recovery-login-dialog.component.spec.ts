import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryLoginDialogComponent } from './recovery-login-dialog.component';

describe('RecoveryLoginDialogComponent', () => {
  let component: RecoveryLoginDialogComponent;
  let fixture: ComponentFixture<RecoveryLoginDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoveryLoginDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryLoginDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
