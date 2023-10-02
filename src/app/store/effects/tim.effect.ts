import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { Store } from "@ngrx/store"
import AppState from "src/app/app.state"
import { TimService } from "src/app/services/tim.service"
import * as TimActions from "../actions/tim.action"
import { catchError, exhaustMap, map, of, switchMap } from "rxjs"
import { Tim } from "src/app/interfaces"

//poziva se posle akcije

@Injectable()
export class TimEffect {
    constructor(private actions$: Actions,
        private timService: TimService,
        private store: Store<AppState>) { }

    createTim$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(TimActions.createTeam),
            switchMap((action) => {
                const { timData: data } = action
                return this.timService.addTim(data).pipe(
                    map((tim: Tim) => {
                        this.timService.errors$.next(["Successfully added Tim"])
                        return TimActions.createTimSuccess({
                            timData: {
                                ...tim,
       
                            },
                            isLoading: false
                        })
                    }),
                    catchError(() => {
                        this.timService.errors$.next(["Error"])
                        return of(TimActions.createTimFail)
                    })
                )
            })
        )
    })

}