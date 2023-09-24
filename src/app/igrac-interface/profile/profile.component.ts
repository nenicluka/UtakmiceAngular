import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { ChangePasswordDialogComponent } from 'src/app/shared-components/change-password-dialog/change-password-dialog.component';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: true,
  imports: [MatChipsModule, ChangePasswordDialogComponent, CommonModule, MatButtonModule, MatDialogModule]
})
export class ProfileComponent {

  constructor(public dialog: MatDialog) { }


  openDialog(): void {
    this.dialog.open(ChangePasswordDialogComponent, {
      width: '550px'
    });
  }
}