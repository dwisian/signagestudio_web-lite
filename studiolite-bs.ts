/// <reference path="../common/_ts/jquery.d.ts" />
/// <reference path="../common/_ts/backbone.d.ts" />
/// <reference path="./_view/MenuItemDetails.ts" />
/// <reference path="./_view/MenuItemModel.ts" />

class AppRouter extends Backbone.Router {

    routes:any;
    private menuItemModel:MenuItemModel;
    private menuItemView:MenuItemDetails;


    constructor(options?:Backbone.RouterOptions) {

        this.routes = {
            "": "list",
            "menu-items/new": "itemForm",
            "menu-items/:item": "itemDetails"
        }

        super(options);
    }

    initialize() {
        this.menuItemModel = new MenuItemModel();
        this.menuItemView = new MenuItemDetails({
            el: '#MyMenu',
            model: this.menuItemModel
        });
    }

    list() {
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

var app_router = new AppRouter();

Backbone.history.start();