interface IListItem {
    id: number;
    name: string;
    opt?: string;
}

class MenuItemModel extends Backbone.Model implements IListItem {

    public id:number;
    public name:string;
    public opt:string;
    private opt2:Date;

    getId():number {
        return this.get('id');
    }

    setId(value:number) {
        this.set('id', value);
    }

    setName(value:string) {
        this.set('name', value);
    }

    getName():string {
        return this.get('name');
    }

    // x is a property that receives a function and returns a string
    someFun(x:()=>string) {
        x().charAt(0);
    }

    // x is an object literal that has to members
    someFun2(x:{a:number; b:string
    }):string {
        return x.b.charAt(0);

    }

    constructor(input:IListItem) {
        super();
        for (var key in input) {
            if (key) {
                this.set(key, input[key]);
            }
        }
    }
}
