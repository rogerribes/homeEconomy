import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private currentUserObservable: Observable<any>;

  private currentUser;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.currentUserObservable = this.afAuth.authState;

    this.currentUserObservable.subscribe(
      user => {
        this.currentUser = user;
      }
    );
  }


  logIn(user: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(user, password).then(
        response => {
          console.log('Response from Login', response);
          this.router.navigateByUrl('/HomeEconomy');
        }
    ).catch(
        errors => {
          console.log('Error on Login', errors);
        }
    );
  }

  logOut() {
    this.afAuth.auth.signOut().then(
        response => {
          console.log('Response from logout', response);
          this.router.navigateByUrl('/signIn');
        }
    );
  }

  register(user: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(user, password);
  }

  getCurrentUserObs() {
    return this.currentUserObservable;
  }

  getCurrentUserData() {
    return this.currentUser;
  }

}
