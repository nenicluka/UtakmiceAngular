import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from 'src/app/shared-components/spinner/spinner.component';
import { MatDividerModule } from '@angular/material/divider';
import { BehaviorSubject } from 'rxjs';
import { Turnir } from 'src/app/interfaces/Turnir';
import { TurnirService } from 'src/app/services/turnir.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tim } from 'src/app/interfaces/Tim';
import { TimService } from 'src/app/services/tim.service';

@Component({
  selector: 'app-turnir-detail',
  templateUrl: './turnir-detail.component.html',
  styleUrls: ['./turnir-detail.component.css'],
  standalone: true,
  imports: [CommonModule, SpinnerComponent, MatDividerModule],
})
export class TurnirDetailComponent implements OnInit {
  turnir$: BehaviorSubject<Turnir> = new BehaviorSubject<Turnir>({} as Turnir); // Definirajte varijablu za pohranu autora
  hasLoaded: boolean = false
  constructor(private timService: TimService, private route: ActivatedRoute, private turnirService: TurnirService, private router: Router) { }

  tim: Tim[] = []

  ngOnInit(): void {
    const turnirId: number = parseInt(this.route.snapshot.params["id"]); // Pretvorite ID autora u broj, ako je potrebno
    this.turnirService.getTurnirById(turnirId)
      .subscribe({
        next: (turnir) => {
          this.turnir$.next(turnir)
          this.hasLoaded = true
          this.tim = turnir.tim
        }
      })
  }

  goToTim(id: number) {
    this.timService.goToTim(id)
  }

  goToTurnir(id: number) {
    this.turnirService.goToTurnir(id)
  }
}
