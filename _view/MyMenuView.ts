/// <reference path="../../common/_ts/jquery.d.ts" />
/// <reference path="../../common/_ts/backbone.d.ts" />
/// <reference path="../../common/_ts/bootstrap.d.ts" />

class MyMenuView extends Backbone.View {

    constructor(options?:any) {
        if (this.el)
            this.el = options.el;
        if (this.model)
            this.model = options.model;
        super(options);
    }

    initialize() {
        console.log('init');
        $('.carousel').carousel();
        if (this.model)
            this.listenTo(this.model, "change", this.render);
    }

    showView(){
        console.log('aa');
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
