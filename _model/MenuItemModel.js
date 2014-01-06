var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MenuItemModel = (function (_super) {
    __extends(MenuItemModel, _super);
    function MenuItemModel(input) {
        _super.call(this);
        for (var key in input) {
            if (key) {
                this.set(key, input[key]);
            }
        }
    }
    MenuItemModel.prototype.getId = function () {
        return this.get('id');
    };

    MenuItemModel.prototype.setId = function (value) {
        this.set('id', value);
    };

    MenuItemModel.prototype.setName = function (value) {
        this.set('name', value);
    };

    MenuItemModel.prototype.getName = function () {
        return this.get('name');
    };

    // x is a property that receives a function and returns a string
    MenuItemModel.prototype.someFun = function (x) {
        x().charAt(0);
    };

    // x is an object literal that has to members
    MenuItemModel.prototype.someFun2 = function (x) {
        return x.b.charAt(0);
    };
    return MenuItemModel;
})(Backbone.Model);
//# sourceMappingURL=MenuItemModel.js.map
