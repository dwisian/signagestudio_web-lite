/// <reference path="../../common/_ts/jquery.d.ts" />
/// <reference path="../../common/_ts/backbone.d.ts" />

class MenuItemDetails extends Backbone.View {

    constructor(viewOptions ?:Backbone.ViewOptions) {
        super(viewOptions);
    }

    initialize() {
        this.listenTo(this.model, "change", this.render);
    }

    render():Backbone.View {
        var markup = '<div>' +
            '<h1>' + this.model.attributes.name + '</h1>' +
            '<p><span class="label">' + 'aaa' + '</span></p>' +
            '</div>' + '<h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>        <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>      <h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>';

        this.$el.html(markup);
        return this;
    }
}
;