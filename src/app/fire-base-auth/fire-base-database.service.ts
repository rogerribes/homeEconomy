import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

const MOVEMENTS_ENDPOINT = '/expenseEntries/';

@Injectable()
export class FireBaseDatabaseService {

  private endpoint: string;
  private dbExpenses: AngularFireList<any>;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {

    this.endpoint = MOVEMENTS_ENDPOINT + this.afAuth.auth.currentUser.uid;
    this.db.list(this.endpoint);
  }

  getEndpoint() {
    return this.endpoint;
  }

}
