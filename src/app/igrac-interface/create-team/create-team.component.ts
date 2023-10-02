import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { BehaviorSubject } from 'rxjs';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { CreateTeam } from 'src/app/interfaces';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css'],
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatDialogModule,MatDividerModule,MatListModule]
})
export class CreateTeamComponent {

  constructor(private authService: AuthService) { }
  errors$: BehaviorSubject<string[]>=new BehaviorSubject<string[]>([])

  private telo:CreateTeam=
  {
    naziv:'',
    mesto:'',
    brojIgraca: 0,
    igraciIds:[],
    naziviTurnira:[],

  }
  setNaziv(value:string){this.telo.naziv=value}
  setMesto(value:string){this.telo.mesto=value}
  setBrojIgraca(inputValue: string): void {
    // Koristite parseInt() da konvertirate string u broj
    const brojIgraca: number = parseInt(inputValue, 10);
    // Postavite broj igrača u vašem objektu
    this.telo.brojIgraca = brojIgraca;
  }
  setIgraci(inputValue: string): void {
    // Splitujte string na osnovu zareza, zatim koristite map() da konvertujete svaki deo u broj i zatim to sve smestite u niz.
    const igraci: number[] = inputValue.split(',').map(str => parseInt(str.trim(), 10));
    // Postavite igraciIds u vašem objektu
    this.telo.igraciIds = igraci;
  }  
  // setTurniri(value: string): void {
  //   // Razdvojite string na osnovu zareza i konvertujte delove u niz stringova
  //   const turniri: string[] = value.split(',').map(str => str.trim());
  //   // Postavite niz naziva turnira u vašem objektu
  //   this.telo.naziviTurnira = turniri;
  // }

  createTeam()
  {
    this.authService.createTeam(this.telo,this.errors$)

  }


}
