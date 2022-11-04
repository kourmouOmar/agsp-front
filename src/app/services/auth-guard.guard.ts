import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginService} from "./login.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private loginService: LoginService) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        console.log("auth-guard");

        if (this.router.url === "" && this.loginService.isLogged()) {
            this.router.navigateByUrl('/modules');
        }
        if (this.router.url === "" && !this.loginService.isLogged()) {
            this.router.navigateByUrl('/login');
        }
        return this.loginService.isLogged();
    }

}
