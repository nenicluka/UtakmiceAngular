import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { User } from "src/app/interfaces";
import { AuthService } from "src/app/services/auth.service";

export const AuthGuard: CanActivateFn =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> => {

        //u local storage se nalaze access token i refresh token
        // local storage je mem u koju su podaci zauvek dok ne izbrises, i kad user nije ulogovan
        //user data su tokeni i role     
        //kad je userdata null usmeri na home
        const userData: string | null = localStorage.getItem("userData")
        if (!userData) {
            return inject(Router).createUrlTree(["/"])
        }

        const user: User = JSON.parse(userData)
        inject(AuthService).user$.next(user)
        return true
    }