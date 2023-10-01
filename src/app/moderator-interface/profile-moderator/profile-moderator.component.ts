import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { ChangePasswordDialogComponent } from 'src/app/shared-components/change-password-dialog/change-password-dialog.component';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-profile-moderator',
  templateUrl: './profile-moderator.component.html',
  styleUrls: ['./profile-moderator.component.css'],
  standalone: true,
  imports: [MatChipsModule, ChangePasswordDialogComponent, CommonModule, MatButtonModule, MatDialogModule]
})
export class ProfileModeratorComponent {

  constructor(public dialog: MatDialog, private authService: AuthService) { }

  openDialog(): void {
    this.dialog.open(ChangePasswordDialogComponent, {
      width: '550px'
    });
  }

  logout(): void {
    this.authService.logout()
  }
}