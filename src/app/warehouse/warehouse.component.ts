import { Component, OnInit } from '@angular/core';
import { WarehouseService } from '../services/warehouse.service';
import { Warehouse } from '../model/warehouse.model';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {
  CapacityColumns: string[] = ['Name', 'Capacity'];
  ItemColums: string[] = ['Name', 'Transfer'];

  warehouses: Warehouse[];
  capacity: any;
  selected = null;

  constructor(private warehouseService: WarehouseService) {
  }

  ngOnInit(): void {
    this.getWarehouses();
    this.getEmptyCapacity();
  }
  getWarehouses(): void {
    this.warehouseService.getWarehouses().subscribe(warehouses => this.warehouses = warehouses);
  }
  getEmptyCapacity(): void {
    this.warehouseService.getEmptyCapacity().subscribe((capacity) => {
      this.capacity = capacity;
    });
  }

  moveItemToWarehouse(warehouseId: string, itemId: string): void {
    if (this.selected) {
      this.warehouseService.moveItemToWarehouse(warehouseId, itemId).then((response) => {
        console.log(response);
        this.getWarehouses();
        this.getEmptyCapacity();
      });
    }
    else {
      console.log('No destination selected');
    }
  }
}
