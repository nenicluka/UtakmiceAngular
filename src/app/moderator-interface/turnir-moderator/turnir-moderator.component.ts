import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { PaginatorComponent } from 'src/app/shared-components/paginator/paginator.component';
import { SpinnerComponent } from 'src/app/shared-components/spinner/spinner.component';
import { MatCardModule } from '@angular/material/card';
import { TurnirService } from 'src/app/services/turnir.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Turnir } from 'src/app/interfaces/Turnir';
import { PageEvent } from '@angular/material/paginator';
import { TimService } from 'src/app/services/tim.service';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-turnir-moderator',
  templateUrl: './turnir-moderator.component.html',
  styleUrls: ['./turnir-moderator.component.css'],
  standalone: true,
  imports: [MatCardModule, CommonModule, SpinnerComponent, PaginatorComponent,FormsModule, MatFormFieldModule, MatInputModule,  FormsModule],
})
export class TurnirModeratorComponent implements OnInit {

  constructor(private turnirService: TurnirService,
    private router: Router,
    private route: ActivatedRoute,
    private timService: TimService) { }

  turnir$: BehaviorSubject<Turnir[]> = new BehaviorSubject<Turnir[]>([])
  turnirForCurrentPage$: Observable<Turnir[]> = of([])
  length: number = 0

  nesto:string="nesto"


  //tok podataka mi je niz turnira i menja se kroz vreme ngOnInit-fja koja se izvrsava kad se iniicijalizuje komponenta
  ngOnInit(): void {
    this.turnirService.getAllTurniri()
      .subscribe({
        next: (turnir) => {
          console.log(turnir)
          this.turnir$.next(turnir)
          this.turnirForCurrentPage$ = of(turnir.slice(0, 5))
          this.length = turnir.length
        }
      })
  }

  onChangingPage(event: PageEvent) {
    const turnirByPage: Turnir[] = this.turnir$.value.slice(
      event.pageIndex * event.pageSize, (event.pageIndex + 1) * event.pageSize
    )
    this.turnirForCurrentPage$ = of(turnirByPage)
  }

  goToTim(id: number) {
    this.timService.goToTim(id)
  }

  goToTurnir(id: number) {
    this.turnirService.goToTurnir(id)
  }

  setvalue(tr:string)
  {
    console.log(tr)
  }

  deleteTurnir(id:number)
  {
    return this.turnirService.obrisi(id);
  }

  searchTerm: string = ''; // Dodajte promenljivu searchTerm

  // ... ostatak koda

  filterTurniri() {
    const filteredIgraci = this.turnir$.value.filter(turnir => {
      const fullName = `${turnir.naziv} ${turnir.opis}`.toLowerCase();
      return fullName.includes(this.searchTerm.toLowerCase());
    });
    this.length = filteredIgraci.length;
    this.turnirForCurrentPage$ = of(filteredIgraci.slice(0, 5));
  }
}