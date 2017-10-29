import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {

  private currentUserObservable: Observable<any>;

  private currentUser;

  constructor(private afAuth: AngularFireAuth) {
    this.currentUserObservable = this.afAuth.authState;

    this.currentUserObservable.subscribe(
      user => {
        this.currentUser = user;
      }
    );
  }


  logIn(user: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(user, password);
  }

  logOut() {
    this.afAuth.auth.signOut();
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
