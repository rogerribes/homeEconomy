import { Injectable } from '@angular/core';
import { FireBaseDatabaseService } from './fire-base-database.service';
import { ExpenseEntry } from '../common/model/expense-entry.model';

@Injectable()
export class ExpensesService {

  expensesList: ExpenseEntry[];

  constructor(private dbService: FireBaseDatabaseService) {
  }

  getExpensesList () {
    this.expensesList = new Array<ExpenseEntry>();
    const promise = new Promise((resolve) => {
      this.dbService.getPlainDatabase().once('value').then(data => {
        data.forEach (snapshot => {
          const cpv = snapshot.val();
          const exp = new ExpenseEntry(cpv.date, cpv.category, cpv.subCategory, cpv.commerce,
              cpv.description, cpv.owner, cpv.value);
          exp.setUid(snapshot.key);
          this.expensesList.push(exp);
        });
        resolve(this.expensesList);
      });
    });
    return promise;
  }

  getExpensesListObservable () {
    return this.dbService.getExpensesFilteredNotPayed().snapshotChanges()
        .map(changes => {
          return changes.map(c => {
            const cpv = c.payload.val();
            const exp = new ExpenseEntry(cpv.date, cpv.category, cpv.subCategory, cpv.commerce,
                cpv.description, cpv.owner, cpv.value);
            exp.setUid(c.key);
            this.expensesList.push(exp);
            return exp;
          });
        });
  }

  updateExpense(expense: ExpenseEntry) {
    expense.removeSelected();
    this.dbService.getExpensesRoot().update(expense.getUid(), expense);
  }

  saveExpense(expense: ExpenseEntry) {
    expense.removeSelected();
    this.dbService.getExpensesRoot().push(expense);

  }

  deleteExpense(expense: ExpenseEntry) {
    this.dbService.getExpensesRoot().remove(expense.getUid());
  }
  /*
   * @input: Array of Expenses that have been marked as payed
   */
  markExpensesAsPayed(expenses: ExpenseEntry[]) {
    expenses.forEach(exp => {
        exp.removeSelected();
        this.dbService.getExpensesRoot().update(exp.getUid(), exp);
    });
  }

}
