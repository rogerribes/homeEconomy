import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { ExpenseEntry } from '../common/model/expense-entry.model';

const MOVEMENTS_ENDPOINT = '/expenseEntries/';
const CATEGORIES_ENDPOINT = '/categories/';

@Injectable()
export class FireBaseDatabaseService {

  private expensesEndpoint: string;
  private categoriesEndpoint: string;
  private dbExpenses: AngularFireList<any>;
  private dbCategories: AngularFireList<any>;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {

    this.expensesEndpoint = MOVEMENTS_ENDPOINT + this.afAuth.auth.currentUser.uid;
    this.categoriesEndpoint = CATEGORIES_ENDPOINT + this.afAuth.auth.currentUser.uid;
    this.dbExpenses = this.db.list(this.expensesEndpoint);
    this.dbCategories = this.db.list(this.categoriesEndpoint);
  }

  getPlainDatabase () {
    return this.db.database.ref(this.expensesEndpoint);
  }

  getExpensesRoot() {
    return this.dbExpenses;
  }

  getExpensesFilteredNotPayed() {
    return this.db.list(this.expensesEndpoint, ref => ref.orderByChild('payed').equalTo(false));
  }

  getCategoriesRoot() {
    return this.dbCategories;
  }

}
