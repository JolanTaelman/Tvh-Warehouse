import { Component, OnInit } from '@angular/core';
import { WarehouseService } from '../services/warehouse.service';
import { Warehouse } from '../model/warehouse.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {
  warehouseColumns: string[] = ['name', 'capacity', 'filled'];
  ItemColums: string[] = ['Name', 'Transfer'];

  warehouses: Warehouse[];
  // warehouses: Observable<Warehouse[]>;

  selected = null;

  constructor(private warehouseService: WarehouseService) {
  }

  ngOnInit(): void {
    this.getWarehouses();
  }
  getWarehouses(): void {
    this.warehouseService.getWarehouses().subscribe(warehouses => this.warehouses = warehouses);

  }

  consoleLog(element): void {
    console.log(element);
  }

  moveItemToWarehouse(warehouseId: string, itemId: string): void {
    if (this.selected) {
      this.warehouseService.moveItemToWarehouse(warehouseId, itemId).then(() => {
        this.getWarehouses();
      });
    }
    else {
      console.log('No destination selected');
    }
  }
}
