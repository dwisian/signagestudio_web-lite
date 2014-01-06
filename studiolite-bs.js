/// <reference path="../common/_ts/jquery.d.ts" />
/// <reference path="../common/_ts/backbone.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var AppRouter = (function (_super) {
    __extends(AppRouter, _super);
    function AppRouter(options) {
        this.routes = {
            "*actions": "defaultRoute"
        };

        _super.call(this, options);
    }
    AppRouter.prototype.initialize = function () {
        // can put more init code here to run after constructor
    };

    AppRouter.prototype.defaultRoute = function () {
        document.write("Default Route Invoked");
    };
    return AppRouter;
})(Backbone.Router);

var app_router = new AppRouter();

Backbone.history.start();
//# sourceMappingURL=studiolite-bs.js.map
