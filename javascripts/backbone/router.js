var myRouter = Backbone.Router.extend({
	greeting: null,
	container: null,
	view1: null,
	view2: null,
	view3: null,
	initialize: function() {
		this.greeting = new GreetModel({ Message: "Sup bro" });
	},
	routes: {
		"": "handleRoute1",
		"view1": "handleRoute1",
		"view2": "handleRoute2",
		"view3": "handleRoute3"
	},
	handleRoute1: function() {
		if (this.view1 == null) {
				this.view1 = new View1({ model: this.greeting });
		}
		this.container.myChildView = this.view1;
		this.container.render();
	},
	handleRoute2: function() {
		if (this.view2 == null) {
				this.view2 = new View2({ model: this.greeting });
		},
		this.container.myChildView = this.view2;
		this.container.render();
	},
	handleRoute3: function() {
		if (this.view3 == null) {
				this.view3 = new View3({ model: this greeting });
		}
		this.container.myChildView = this.view3;
		this.container.render();
	}
});