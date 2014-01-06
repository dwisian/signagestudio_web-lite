/// <reference path="../../common/_ts/jquery.d.ts" />
/// <reference path="../../common/_ts/backbone.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MenuItemView = (function (_super) {
    __extends(MenuItemView, _super);
    function MenuItemView(options) {
        this.el = options.el;
        this.model = options.model;
        _super.call(this, options);

        this.listenTo(this.model, "change", this.render);
    }
    MenuItemView.prototype.initialize = function () {
        // this.listenTo(this.model, "change", this.render);
    };

    MenuItemView.prototype.render = function () {
        console.log('aaaa');
        var markup = '<div>' + '<h1>' + this.model.attributes.name + '</h1>' + '<p><span class="label">' + 'aaa' + '</span></p>' + '</div>' + '<h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>        <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>      <h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>';

        this.$el.html(markup);
        return this;
    };
    return MenuItemView;
})(Backbone.View);
;
//# sourceMappingURL=MenuItemView.js.map
