import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class PreferencesService {

  public preferences;

  constructor(private db: AngularFireDatabase) {
    this.preferences = this.db.object('security').valueChanges();

  }

  getPreferences() {
    return this.preferences;
  }


}
