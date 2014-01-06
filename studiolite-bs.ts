/// <reference path="../common/_ts/jquery.d.ts" />
/// <reference path="../common/_ts/backbone.d.ts" />
/// <reference path="../common/_ts/lib.d.ts" />
/// <reference path="../common/_ts/bootstrap.d.ts" />
/// <reference path="./_model/MenuItemModel.ts" />
/// <reference path="./_view/MyMenuView.ts" />
/// <reference path="./_view/AnotherView.ts" />

class AppRouter extends Backbone.Router {

    routes:any;
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

        var anotherView:AnotherView = new AnotherView();
        anotherView.showView();
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


$(function () {
    var app_router = new AppRouter();
    Backbone.history.start();
});

