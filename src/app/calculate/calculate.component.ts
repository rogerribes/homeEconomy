import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../fire-base-auth/expenses.service';
import { ExpenseEntry } from '../common/model/expense-entry.model';
import { MaterialDataSource } from '../common/model/material-data-source';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

  displayedColumns = ['Fecha', 'Categoria', 'Concepto', 'Importe', 'Select'];
  dataSource;
  expensesList: ExpenseEntry[];
  disableFirstNext: boolean;

  constructor(private expenseService: ExpensesService) {
    this.disableFirstNext = true;
  }

  ngOnInit() {
    this.expenseService.getExpensesList().then((list: ExpenseEntry[]) => {
      this.expensesList = list;
      this.dataSource = new MaterialDataSource(this.expensesList);
    });
  }

  selectExpenses() {
    this.expensesList.forEach(elm => {
      if (elm.selected) {
        console.log('Element Selected', elm);
      }
    });
  }
  onCheckSelected () {
    this.disableFirstNext = true;
    this.expensesList.forEach(elm => {
      this.disableFirstNext = elm.selected ? !elm.selected : this.disableFirstNext;
    });
  }

}
