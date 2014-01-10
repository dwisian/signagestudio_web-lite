var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
Main application backbone router
@class AppRouter
@constructor
@return {Object} instantiated AppRouter
**/
var AppRouter = (function (_super) {
    __extends(AppRouter, _super);
    function AppRouter(options) {
        this.routes = {
            "": "list",
            "menu-items/new": "itemForm",
            "menu-items/:item": "itemDetails"
        };

        _super.call(this, options);
    }
    AppRouter.prototype.initialize = function () {
        this.menuItemModel = new MenuItemModel({
            id: 1,
            name: 'a123',
            opt: 'hello',
            moreArgs: {
                x: 1,
                y: 2
            }
        });
        this.menuItemView = new MyMenuView({
            el: '#MyMenu',
            model: this.menuItemModel
        });
        var anID = this.menuItemModel.getId();
        var aName = this.menuItemModel.getName();
        this.menuItemView.showView();

        var anotherView = new AnotherView();
        anotherView.showView2();
    };

    AppRouter.prototype.list = function () {
        return;
        var self = this;
        $('#app').fadeOut(function () {
            $('#app').html('List screen').fadeIn();
        });
    };

    AppRouter.prototype.itemDetails = function (item) {
        var self = this;
        $('#app').fadeOut(function () {
            self.menuItemModel.set('name', item);
            $('#app').html(self.menuItemView.el);
            $('#app').fadeIn();
        });
    };

    AppRouter.prototype.itemForm = function () {
        $('#app').fadeOut(function () {
            $('#app').html('New form item').fadeIn();
        });
    };
    return AppRouter;
})(Backbone.Router);
//# sourceMappingURL=AppRouter.js.map
