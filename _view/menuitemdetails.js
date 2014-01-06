/// <reference path="../../common/_ts/jquery.d.ts" />
/// <reference path="../../common/_ts/backbone.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MenuItemDetails = (function (_super) {
    __extends(MenuItemDetails, _super);
    function MenuItemDetails(viewOptions) {
        _super.call(this, viewOptions);
    }
    MenuItemDetails.prototype.initialize = function () {
        this.listenTo(this.model, "change", this.render);
    };

    MenuItemDetails.prototype.render = function () {
        var markup = '<div>' + '<h1>' + this.model.attributes.name + '</h1>' + '<p><span class="label">' + 'aaa' + '</span></p>' + '</div>' + '<h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>        <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>      <h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>';

        this.$el.html(markup);
        return this;
    };
    return MenuItemDetails;
})(Backbone.View);
;
//# sourceMappingURL=MenuItemDetails.js.map
