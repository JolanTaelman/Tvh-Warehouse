export class Warehouse {
    id: string;
    items: string[];
    name: string;
    capacity: number;

    constructor(name: string, capacity: number, items: string[]) {
        this.name = name;
        this.capacity = capacity;
        this.items = items;
    }

    static fromJSON(json: any): Warehouse {
        const warehouse = new Warehouse(
            json.name,
            json.capacity,
            json.items
        );

        warehouse.id = json._id;
        return warehouse;
    }
    // tslint:disable-next-line:typedef
    toJSON() {
        return {
            _id: this.id,
            name: this.name,
            capacity: this.capacity,
            items: this.items,
        };
    }
}

