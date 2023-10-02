import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { Store } from "@ngrx/store"
import AppState from "src/app/app.state"
import { TurnirService } from "src/app/services/turnir.service"
import * as TurnirActions from "../actions/turnir.action"
import { catchError, exhaustMap, map, of, switchMap } from "rxjs"
import { Turnir } from "src/app/interfaces"

//poziva se posle akcije

@Injectable()
export class TurnirEffect {
    constructor(private actions$: Actions,
        private turnirService: TurnirService,
        private store: Store<AppState>) { }

    createTurnir$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(TurnirActions.createTurnir),
            switchMap((action) => {
                const { turnirData: data } = action
                return this.turnirService.addTurnir(data).pipe(
                    map((turnir: Turnir) => {
                        this.turnirService.errors$.next(["Successfully added Turnir"])
                        return TurnirActions.createTurnirSuccess({
                            turnirData: {
                                ...turnir,
       
                            },
                            isLoading: false
                        })
                    }),
                    catchError(() => {
                        this.turnirService.errors$.next(["Error"])
                        return of(TurnirActions.createTurnirFail)
                    })
                )
            })
        )
    })

}