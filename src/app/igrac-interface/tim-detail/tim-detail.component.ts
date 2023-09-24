import { SpinnerComponent } from 'src/app/shared-components/spinner/spinner.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Tim } from 'src/app/interfaces/Tim';
import { TurnirService } from 'src/app/services/turnir.service';
import { TimService } from 'src/app/services/tim.service';
import { Turnir } from 'src/app/interfaces/Turnir';
import { Igrac } from 'src/app/interfaces/Igrac';

@Component({
  selector: 'app-tim-detail',
  templateUrl: './tim-detail.component.html',
  styleUrls: ['./tim-detail.component.css'],
  standalone: true,
  imports: [SpinnerComponent, CommonModule],
})
export class TimDetailComponent {
  tim$: BehaviorSubject<Tim> = new BehaviorSubject<Tim>({} as Tim); // Definirajte varijablu za pohranu autora
  hasLoaded: boolean = false
  constructor(private turnirService: TurnirService, private route: ActivatedRoute, private timService: TimService, private router: Router) { }

  turnir: Turnir[] = []
  igrac: Igrac[] = []

  ngOnInit(): void {
      const timId: number = parseInt(this.route.snapshot.params["id"]); // Pretvorite ID autora u broj, ako je potrebno

      this.timService.getTimById(timId)
          .subscribe({
              next: (tim) => {
                  this.tim$.next(tim)
                  this.hasLoaded = true
                  this.turnir = tim.turnir
                  this.igrac = tim.igrac
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