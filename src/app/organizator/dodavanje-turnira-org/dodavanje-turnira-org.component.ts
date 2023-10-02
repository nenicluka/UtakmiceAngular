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
import { CreateTeam, CreateTurnir } from 'src/app/interfaces';
import AppState from 'src/app/app.state';
import { ActivatedRoute, Router } from '@angular/router';
import { TimService } from 'src/app/services/tim.service';
import { Store } from '@ngrx/store';
import { createTeam, setTeamData } from 'src/app/store/actions/tim.action';
import { selectAddTimData } from 'src/app/store/selectors/tim.selectors';
import { TurnirService } from 'src/app/services/turnir.service';
import { selectAddTurnirData } from 'src/app/store/selectors/turnir.selectors';
import { createTurnir, setTurnirData } from 'src/app/store/actions/turnir.action';

@Component({
  selector: 'app-dodavanje-turnira-org',
  templateUrl: './dodavanje-turnira-org.component.html',
  styleUrls: ['./dodavanje-turnira-org.component.css'],
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatDialogModule,MatDividerModule,MatListModule]
})
export class DodavanjeTurniraOrgComponent {

  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
    private route: ActivatedRoute,
    public turnirService: TurnirService,
    private router: Router) { }
   errors$: BehaviorSubject<string[]>=new BehaviorSubject<string[]>([])

  ngOnInit(): void {

    this.store.select(selectAddTurnirData).subscribe({
        next: (turnirData) => {
            this.addTurnirData = turnirData
        }
    })
}


  addTurnirData: CreateTurnir = {
    naziv: "",
    tip: "",
    opis: "",
    mesto: "",
    datum:new Date(),
    cenaUcesca: 0,
    nagradniFond: 0,
    brojTimova: 0,
    timoviIDS: [],
    organizatoriID:[]
}

getUserReviewFromForm(property: keyof CreateTurnir, value: string | number | number[]) {
  if (property === "cenaUcesca") value = parseInt(value as string)
  if (property === "nagradniFond") value = parseInt(value as string)
  if (property === "brojTimova") value = parseInt(value as string)
  if (property === "timoviIDS") value = (value as string).split(',').map(str => parseInt(str.trim(), 10));
  if (property === "organizatoriID") value = (value as string).split(',').map(str => parseInt(str.trim(), 10));


  this.store.dispatch(setTurnirData({ property, value }))
}

  addTurnir() {
    this.turnirService.errors$.next(["Processing"])

    this.store.dispatch(createTurnir({
        turnirData: this.addTurnirData
    }))
    console.log(this.addTurnirData)

}

}