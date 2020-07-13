export class Item {
    id: string;
    name: string;
    warehouseId: string;

    constructor(name: string, warehouseId: string){
        this.name = name;
        this.warehouseId = warehouseId;
    }

}
