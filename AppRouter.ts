/**
 Main application backbone router
 @class AppRouter
 @constructor
 @return {Object} instantiated AppRouter
 **/
class AppRouter extends Backbone.Router {

    private routes:any;
    private menuItemModel:MenuItemModel;
    private menuItemView:MyMenuView;

    constructor(options?:Backbone.RouterOptions) {

        this.routes = {
            "": "list",
            "menu-items/new": "itemForm",
            "menu-items/:item": "itemDetails"
        }

        super(options);
    }

    initialize() {
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
        var anID:number = this.menuItemModel.getId();
        var aName:string = this.menuItemModel.getName();
        this.menuItemView.showView()

        var anotherView:AnotherView = new AnotherView();
        anotherView.showView2();
    }

    list() {
        return;
        var self = this;
        $('#app').fadeOut(function () {
            $('#app').html('List screen').fadeIn();
        });
    }

    itemDetails(item) {
        var self = this;
        $('#app').fadeOut(function () {
            self.menuItemModel.set('name', item);
            $('#app').html(self.menuItemView.el);
            $('#app').fadeIn();
        });
    }

    itemForm() {
        $('#app').fadeOut(function () {
            $('#app').html('New form item').fadeIn();
        });
    }
}


