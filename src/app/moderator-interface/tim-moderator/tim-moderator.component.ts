import { BehaviorSubject, Observable, of } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { PaginatorComponent } from 'src/app/shared-components/paginator/paginator.component';
import { SpinnerComponent } from 'src/app/shared-components/spinner/spinner.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tim } from 'src/app/interfaces/Tim';
import { TimService } from 'src/app/services/tim.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TurnirService } from 'src/app/services/turnir.service';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-tim-moderator',
  templateUrl: './tim-moderator.component.html',
  styleUrls: ['./tim-moderator.component.css'],
  standalone: true,
  imports: [MatDividerModule, CommonModule, PaginatorComponent, SpinnerComponent, MatCardModule, MatChipsModule, FormsModule],
})
export class TimModeratorComponent implements OnInit {
  tim$: BehaviorSubject<Tim[]> = new BehaviorSubject<Tim[]>([])
  timForCurrentPage$: Observable<Tim[]> = of([])
  length: number = 0

  constructor(
    private timService: TimService,
    private router: Router,
    private route: ActivatedRoute,
    private turnirService: TurnirService,
    public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.timService.getAllTims()
      .subscribe({
        next: (tim) => {
          this.tim$.next(tim)
          this.timForCurrentPage$ = of(tim.slice(0, 5))
          this.length = tim.length
        }
      }
      );
  }

  // ova funkcija mi se ponavlja vise puta, i cini mi se da mozda moze da se ucini generickom
  onChangingPage(event: PageEvent) {
    const genresByPage: Tim[] = this.tim$.value.slice(
      event.pageIndex * event.pageSize, (event.pageIndex + 1) * event.pageSize
    )
    this.timForCurrentPage$ = of(genresByPage)
  }

  goToTim(id: number) {
    this.timService.goToTim(id)
  }

  goToTurnir(id: number) {
    this.turnirService.goToTurnir(id)
  }

  
  deleteTim(id:number)
  {
    return this.timService.obrisi(id);
  }

  searchTerm: string = ''; // Dodajte promenljivu searchTerm

  // ... ostatak koda

  filterTimovi() {
    const filteredIgraci = this.tim$.value.filter(tim => {
      const fullName = `${tim.naziv}`.toLowerCase();
      return fullName.includes(this.searchTerm.toLowerCase());
    });
    this.length = filteredIgraci.length;
    this.timForCurrentPage$ = of(filteredIgraci.slice(0, 5));
  }
  


}