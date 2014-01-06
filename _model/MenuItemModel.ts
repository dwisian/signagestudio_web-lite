interface IListItem {
    id: number;
    name: string;
    opt?: string;
}

class MenuItemModel extends Backbone.Model implements IListItem {

    public id:number;
    public name:string;
    public opt:string;

    getId(): number { return this.get('id'); }
    setId(value: number) { this.set('id', value); }
    setName(value: string) { this.set('name', value); }
    getName(): string { return this.get('name'); }

    constructor(input: IListItem) {
        super();
        for (var key in input) {
            if (key) {
                this.set(key, input[key]);
            }
        }
    }
}
