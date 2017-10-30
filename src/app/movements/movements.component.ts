import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { FireBaseDatabaseService } from '../fire-base-auth/fire-base-database.service';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.css']
})
export class MovementsComponent implements OnInit {
  displayedColumns = ['Fecha', 'Categoria', 'Concepto', 'Importe'];
  dataSource = new ExampleDataSource();
  constructor(private dbService: FireBaseDatabaseService) { }

  ngOnInit() {

  }

}

const data2: any[] = [
  {date: '10/08/2017', category: 'Home', subCategory: 'Meal',
    commerce: 'Mercadona', description: 'Comida Casa', property: 'Roger', value: '10.68'},
  {date: '10/08/2017', category: 'Home', subCategory: 'Meal',
    commerce: 'Mercadona', description: 'Comida Casa', property: 'Roger', value: '10.68'},
  {date: '10/08/2017', category: 'Home', subCategory: 'Meal',
    commerce: 'Mercadona', description: 'Comida Casa', property: 'Roger', value: '10.68'},
  {date: '10/08/2017', category: 'Home', subCategory: 'Meal',
    commerce: 'Mercadona', description: 'Comida Casa', property: 'Roger', value: '10.68'},
  {date: '10/08/2017', category: 'Home', subCategory: 'Meal',
    commerce: 'Mercadona', description: 'Comida Casa', property: 'Roger', value: '10.68'},
  {date: '10/08/2017', category: 'Home', subCategory: 'Meal',
    commerce: 'Mercadona', description: 'Comida Casa', property: 'Roger', value: '10.68'}
];

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of(data2);
  }

  disconnect() {}
}

