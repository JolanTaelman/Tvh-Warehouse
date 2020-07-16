import { Injectable } from '@angular/core';
import { Warehouse } from '../model/warehouse.model';
import { Observable, of, } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {
  private warehouseUrl = 'https://tvh-backend.herokuapp.com';

  constructor(private http: HttpClient) { }

  getWarehouses(): Observable<Warehouse[]> {
    const url = `${this.warehouseUrl}/warehouses`;
    return this.http.get<Warehouse[]>(url).pipe(map((data) => {
      data.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
      });
      return data;
    }));
  }

  getWarehouse(id: string): Observable<Warehouse> {
    const url = `${this.warehouseUrl}/${id}`;
    return this.http.get<Warehouse>(url);
  }

  moveItemToWarehouse(warehouseId: string, itemId: string): Promise<object> {
    const url = `${this.warehouseUrl}/warehouses/${warehouseId}/${itemId}`;
    return this.http.post(url, {}).toPromise();
  }

  getEmptyCapacity(): Observable<any> {
    const url = `${this.warehouseUrl}/capacity`;
    return this.http.get(url);
  }
}
