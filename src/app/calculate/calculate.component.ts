import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../fire-base-auth/expenses.service';
import { ExpenseEntry } from '../common/model/expense-entry.model';
import { MaterialDataSource } from '../common/model/material-data-source';
import { CalculateService } from './calculate.service';
import { Calculate } from '../common/model/calculate';

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
  resume: Calculate;

  constructor(private expenseService: ExpensesService, private calculateService: CalculateService) {
    this.disableFirstNext = true;
  }

  ngOnInit() {
    this.expenseService.getExpensesList().then((list: ExpenseEntry[]) => {
      this.expensesList = list;
      this.dataSource = new MaterialDataSource(this.expensesList);
    });
  }

  selectExpenses() {
    this.resume = this.calculateService.getNewCalculate(this.expensesList);
    console.log('Object Calculate', this.resume);
  }
  onCheckSelected () {
    this.disableFirstNext = true;
    this.expensesList.forEach(elm => {
      this.disableFirstNext = elm.selected ? !elm.selected : this.disableFirstNext;
    });
  }

}
