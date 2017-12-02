import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FireBaseDatabaseService } from '../fire-base-auth/fire-base-database.service';
import { ExpenseEntry } from '../common/model/expense-entry.model';
import { ExpensesService } from '../fire-base-auth/expenses.service';


const CURRENCY_REGEX = /^(?!\(.*[^)]$|[^(].*\)$)\(?\$?(0|[1-9]\d{0,2}(,?\d{3})?)(\.\d\d)?\)?$/;

@Component ({
  selector: 'app-expense-entry',
  templateUrl: './expense-entry.component.html',
  styleUrls: [ './expense-entry.component.css' ],
  providers: [ FireBaseDatabaseService ]
})
export class ExpenseEntryComponent implements OnInit {
  expenseForm: FormGroup;
  datePickerOptions: {};

  constructor ( private formBuilder: FormBuilder, private expenseSrv: ExpensesService ) {
    this.datePickerOptions = {
      minDate: moment (moment ().subtract (6, 'months')),
      maxDate: moment ().format ()
    };

    this.expenseForm = this.formBuilder.group ({
      date: [ '', Validators.required ],
      category: [ '', Validators.required ],
      subCategory: [ '', Validators.required ],
      commerce: [ '', Validators.required ],
      description: [ '', Validators.required ],
      value: [ '', Validators.compose ([ Validators.required, Validators.pattern (CURRENCY_REGEX) ]) ],
      owner: [ '', Validators.required ],

    });
  }

  ngOnInit () {
  }

  saveExpense () {

    const values = this.expenseForm.value;
    this.expenseForm.reset({});
    const expense = new ExpenseEntry (moment (values.date).format ('DD-MM-YYYY'), values.category,
        values.subCategory, values.commerce,
        values.description, values.owner,
        values.value);
    expense.setEmpyValues();
    this.expenseSrv.saveExpense(expense);
  }


}
