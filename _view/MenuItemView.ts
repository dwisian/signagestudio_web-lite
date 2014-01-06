/// <reference path="../../common/_ts/jquery.d.ts" />
/// <reference path="../../common/_ts/backbone.d.ts" />
/// <reference path="../../common/_ts/lib.d.ts" />

class MenuItemView extends Backbone.View {

    constructor(options?:any) {
        this.el = options.el;
        this.model = options.model;
        super(options);

        // this.listenTo(this.model, "change", this.render);
    }

    initialize() {
        this.listenTo(this.model, "change", this.render);
    }

    render():Backbone.View {
        var markup = '<div>' +
            '<h1>' + this.model.attributes.name + '</h1>' +
            '<p><span class="label">' + 'aaa' + '</span></p>' +
            '</div>' + '<h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>        <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>      <h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>';

        // this.$el.html(markup);
        $('#app').html(this.el);
        alert(this.el);
        return this;
    }
}
