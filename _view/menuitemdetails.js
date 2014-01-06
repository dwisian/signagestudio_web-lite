/**
 Add block wizard is a UI component which allows selection and insertion of a new component (i.e. QR / RSS ...)
 or a resource to be added to the currently selected timeline_channel
 @class MenuItemDetails
 @constructor
 @return {Object} instantiated AddBlockWizard
 **/
var MenuItemDetails = Backbone.View.extend({

    initialize: function  () {
        this.listenTo(this.model, "change", this.render);
    },

    /**
     Returns this model's attributes as...
     @method setPlayerData
     @param {Number} i_playerData
     @return {Number} Unique clientId.
     **/
	render: function () {
		var markup = '<div>' +
		'<h1>' + this.model.attributes.name + '</h1>' +
		'<p><span class="label">' + 'aaa' + '</span></p>' +
		'</div>'+'<h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>        <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>  <h1>assa</h1>      <h1>assa</h1>            <h1>assa</h1>            <h1>assa</h1>';

		this.$el.html(markup);
		return this;
	}
});