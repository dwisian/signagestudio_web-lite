class AnotherView extends Backbone.View {

    constructor(options?:any) {
        if (this.el)
            this.el = options.el;
        if (this.model)
            this.model = options.model;
        super(options);
    }

    initialize() {
        console.log('init');
        if (this.model)
            this.listenTo(this.model, "change", this.render);
    }

    showView2(){
        console.log('bb');
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
