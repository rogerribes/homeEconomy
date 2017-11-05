import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';


export class MaterialDataSource extends DataSource<any> {

  constructor(private database) {
    super();
  }
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<any[]> {
    return Observable.of(this.database);
  }

  disconnect() {}
}
