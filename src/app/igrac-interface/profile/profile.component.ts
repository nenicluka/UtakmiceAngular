import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { ChangePasswordDialogComponent } from 'src/app/shared-components/change-password-dialog/change-password-dialog.component';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from 'src/app/services/auth.service';
import { CreateTeamComponent } from '../create-team/create-team.component';
import { DodavanjeTimaComponent } from '../dodavanje-tima/dodavanje-tima.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: true,
  imports: [MatChipsModule, ChangePasswordDialogComponent, CommonModule, MatButtonModule, MatDialogModule]
})
export class ProfileComponent {

  constructor(public dialog: MatDialog, private authService: AuthService) { }

  openDialog(): void {
    this.dialog.open(ChangePasswordDialogComponent, {
      width: '550px'
    });
  }

  dodajTim(): void {
    this.dialog.open(DodavanjeTimaComponent, {
      width: '550px'
    });
  }


  logout(): void {
    this.authService.logout()
  }
}