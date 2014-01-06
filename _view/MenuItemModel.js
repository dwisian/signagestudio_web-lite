var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MenuItemModel = (function (_super) {
    __extends(MenuItemModel, _super);
    function MenuItemModel() {
        _super.apply(this, arguments);
        this.defaults = {
            id: 0,
            priority: 0
        };
    }
    return MenuItemModel;
})(Backbone.Model);
//# sourceMappingURL=MenuItemModel.js.map
