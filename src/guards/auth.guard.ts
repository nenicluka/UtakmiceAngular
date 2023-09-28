import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "src/app/services/auth.service";

export const AuthGuard: CanActivateFn =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> => {

        console.log(inject(AuthService).user$, inject(AuthService).user$.value)
        const user = inject(AuthService).user$.value

        if (!user) {
            return inject(Router).createUrlTree(["/"])
        }

        return true
    }