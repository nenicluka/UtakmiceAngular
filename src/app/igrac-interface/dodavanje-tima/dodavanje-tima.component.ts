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
import AppState from 'src/app/app.state';
import { ActivatedRoute, Router } from '@angular/router';
import { TimService } from 'src/app/services/tim.service';
import { Store } from '@ngrx/store';
import { createTeam, setTeamData } from 'src/app/store/actions/tim.action';
import { selectAddTimData } from 'src/app/store/selectors/tim.selectors';

@Component({
  selector: 'app-dodavanje-tima',
  templateUrl: './dodavanje-tima.component.html',
  styleUrls: ['./dodavanje-tima.component.css'],
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatDialogModule,MatDividerModule,MatListModule]
})
export class DodavanjeTimaComponent {

  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
    private route: ActivatedRoute,
    public timService: TimService,
    private router: Router) { }
   errors$: BehaviorSubject<string[]>=new BehaviorSubject<string[]>([])

  ngOnInit(): void {

    this.store.select(selectAddTimData).subscribe({
        next: (reviewData) => {
            this.addTimData = reviewData
        }
    })
}


  addTimData: CreateTeam = {
    naziv: "",
    mesto: "",
    brojIgraca: 0,
    igraciIds: [],
    naziviTurnira: []
}

getUserReviewFromForm(property: keyof CreateTeam, value: string | number | number[]) {
  if (property === "brojIgraca") value = parseInt(value as string)
  if (property === "igraciIds") value = (value as string).split(',').map(str => parseInt(str.trim(), 10));
  if (property === "naziviTurnira") value = (value as string).split(',').map(str => parseInt(str.trim(), 10));


  this.store.dispatch(setTeamData({ property, value }))
}

  addTim() {
    this.timService.errors$.next(["Processing"])

    this.store.dispatch(createTeam({
        timData: this.addTimData
    }))
    console.log(this.addTimData)

}

}