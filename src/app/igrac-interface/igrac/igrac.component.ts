import { Component, OnInit } from '@angular/core';
import { PaginatorComponent } from 'src/app/shared-components/paginator/paginator.component';
import { PageEvent } from '@angular/material/paginator';
import { SpinnerComponent } from 'src/app/shared-components/spinner/spinner.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Observable, filter, map, of } from 'rxjs';
import { Igrac } from 'src/app/interfaces/Igrac';
import { IgracService } from 'src/app/services/igrac.service';

@Component({
  selector: 'app-igrac',
  templateUrl: './igrac.component.html',
  styleUrls: ['./igrac.component.css'],
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatButtonModule, MatProgressBarModule, CommonModule,
    MatButtonModule, MatDialogModule, PaginatorComponent, SpinnerComponent
  ],

})
export class IgracComponent implements OnInit {
  igrac$: BehaviorSubject<Igrac[]> = new BehaviorSubject<Igrac[]>([])
  igracForCurrentPage$: Observable<Igrac[]> = of([])

  igracTim: Igrac[] = []
  length: number = 0


  constructor(
    private igracService: IgracService,
    public dialog: MatDialog
  ) { }

  // openDialog(igracName: string,  igracTim: Igrac[]) {
  //   this.dialog.open(GenreBooksDialogComponent, {
  //     data: { igracName, igracTim },
  //     autoFocus: false,
  //     maxHeight: "90vh"
  //   })
  // }

  ngOnInit(): void {
    this.igracService.getBooks()
      .subscribe({
        next: (igrac) => {
          this.igrac$.next(igrac)
          this.igracForCurrentPage$ = of(igrac.slice(0, 5))
          this.length = igrac.length
        }
      })
  }

  onChangingPage(event: PageEvent) {
    const igracByPage: Igrac[] = this.igrac$.value.slice(
      event.pageIndex * event.pageSize, (event.pageIndex + 1) * event.pageSize
    )
    this.igracForCurrentPage$ = of(igracByPage)
  }
}