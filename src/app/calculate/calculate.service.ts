import { Injectable } from '@angular/core';
import { ExpenseEntry } from '../common/model/expense-entry.model';
import { Calculate } from '../common/model/calculate';
import * as moment from 'moment';

@Injectable()
export class CalculateService {

  constructor() { }

  getNewCalculate(expenses: ExpenseEntry[]) {
    const calculate = new Calculate();
    calculate.date = moment ().format ('DD-MM-YYYY');
    calculate.totalExpenses = 0;
    expenses.forEach((expense: ExpenseEntry) => {
      if (expense.selected) {
        //TODO Improve Switch Version to dinamically push values to different arrays
        calculate.totalExpenses ++;
        calculate.expenses.push(expense.getUid());
        
      }
    });

    return calculate;
  }

}
