import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


const CURRENCY_REGEX = /^(?!\(.*[^)]$|[^(].*\)$)\(?\$?(0|[1-9]\d{0,2}(,?\d{3})?)(\.\d\d)?\)?$/;

@Component({
  selector: 'app-expense-entry',
  templateUrl: './expense-entry.component.html',
  styleUrls: ['./expense-entry.component.css']
})
export class ExpenseEntryComponent implements OnInit {
  minDate;
  maxDate;
  constructor() {
    //this.maxDate = new Date(2020, 0, 1);
    this.maxDate = moment().format();
    console.log('MAX DATE', this.maxDate);
    this.minDate = moment(moment().subtract(6, 'months'));
    console.log('MIN DATE', this.minDate);
  }




  ngOnInit() {
  }

}
