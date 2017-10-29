import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AngularFireAuth} from "angularfire2/auth";

@Injectable()
export class UserConnectedGuard implements CanActivate {

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.afAuth.authState.map(
      (user: any) => {
        if (user) {
          return true;
        } else {
          this.router.navigate(['/signIn']);
          return false;
        }
    }
    );
  }
}
