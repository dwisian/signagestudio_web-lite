/// <reference path="../../common/_ts/jquery.d.ts" />
/// <reference path="../../common/_ts/backbone.d.ts" />
/// <reference path="../../common/_ts/bootstrap.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MyMenuView = (function (_super) {
    __extends(MyMenuView, _super);
    function MyMenuView(options) {
        if (this.el)
            this.el = options.el;
        if (this.model)
            this.model = options.model;
        _super.call(this, options);
    }
    MyMenuView.prototype.initialize = function () {
        console.log('init');
        $('.carousel').carousel();
        if (this.model)
            this.listenTo(this.model, "change", this.render);
    };

    MyMenuView.prototype.showView = function () {
        console.log('show view');
    };

    MyMenuView.prototype.render = function () {
        var markup = '<div>' + '<h1>' + this.model.attributes.name + '</h1>' + '<p><span class="label">' + 'aaa' + '</span></p>' + '</div>' + '<h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>        <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>      <h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>';
        this.$el.html(markup);
        return this;
    };
    return MyMenuView;
})(Backbone.View);
//# sourceMappingURL=MyMenuView.js.map
