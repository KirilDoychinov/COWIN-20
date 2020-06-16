import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-recovery-login-dialog',
  templateUrl: './recovery-login-dialog.component.html',
  styleUrls: ['./recovery-login-dialog.component.css']
})
export class RecoveryLoginDialogComponent implements OnInit {

  recoveryEmail: string;

  constructor(
    private dialogRef: MatDialogRef<RecoveryLoginDialogComponent>) {
    this.recoveryEmail = '';
  }

  ngOnInit() {
  }

  submit(): void {
    this.dialogRef.close(this.recoveryEmail);
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
