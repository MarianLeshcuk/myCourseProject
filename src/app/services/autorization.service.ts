import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class RoleGuard implements CanActivate {
    
    constructor(private router: Router) {}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        // throw new Error("Method not implemented.");
        let token = JSON.parse(localStorage.getItem("token"));
        if(token) {
            return true;
        } else {
            this.router.navigate(["[{ outlets: { 'autorization': [ 'signIn'] }}]"]);
            return false;
        }
    }
}