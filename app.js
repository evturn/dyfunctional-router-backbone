var View1 = Backbone.View.extend({
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.model.get('Message') + " from the View 1");
	}
});