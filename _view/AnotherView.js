/// <reference path="../../common/_ts/jquery.d.ts" />
/// <reference path="../../common/_ts/backbone.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var AnotherView = (function (_super) {
    __extends(AnotherView, _super);
    function AnotherView(options) {
        if (this.el)
            this.el = options.el;
        if (this.model)
            this.model = options.model;
        _super.call(this, options);
    }
    AnotherView.prototype.initialize = function () {
        console.log('init');
        if (this.model)
            this.listenTo(this.model, "change", this.render);
    };

    AnotherView.prototype.showView = function () {
        console.log('show view');
    };

    AnotherView.prototype.render = function () {
        var markup = '<div>' + '<h1>' + this.model.attributes.name + '</h1>' + '<p><span class="label">' + 'aaa' + '</span></p>' + '</div>' + '<h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>        <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>      <h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>';
        this.$el.html(markup);
        return this;
    };
    return AnotherView;
})(Backbone.View);
//# sourceMappingURL=AnotherView.js.map
