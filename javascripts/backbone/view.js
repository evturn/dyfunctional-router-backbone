var View1 = Backbone.View.extend({
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.model.get('Message') + " from the View 1");
	}
});

var View2 = Backbone.View.extend({
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.model.get('Message') + " from the View 2");
	}
});

var View3 = Backbone.View.extend({
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.model.get('Message') + " from the View 3");
	}
});