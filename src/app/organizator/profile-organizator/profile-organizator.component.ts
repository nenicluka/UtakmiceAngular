import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { ChangePasswordDialogComponent } from 'src/app/shared-components/change-password-dialog/change-password-dialog.component';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from 'src/app/services/auth.service';
import { DodavanjeTurniraOrgComponent } from '../dodavanje-turnira-org/dodavanje-turnira-org.component';

@Component({
  selector: 'app-profile-organizator',
  templateUrl: './profile-organizator.component.html',
  styleUrls: ['./profile-organizator.component.css'],
  standalone: true,
  imports: [MatChipsModule, ChangePasswordDialogComponent, CommonModule, MatButtonModule, MatDialogModule]
})
export class ProfileOrganizatorComponent {

  constructor(public dialog: MatDialog, private authService: AuthService) { }

  openDialog(): void {
    this.dialog.open(ChangePasswordDialogComponent, {
      width: '550px'
    });
  }

  logout(): void {
    this.authService.logout()
  }

  dodajTurnir(): void {
    this.dialog.open(DodavanjeTurniraOrgComponent, {
      width: '550px'
    });
  }


}