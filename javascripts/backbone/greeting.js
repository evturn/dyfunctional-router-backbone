var greeting = new GreetModel({ Message: "Hello world" });

var container = new ContainerView({ el: $('#AppContainer')});
var view1 = null;
var view2 = null;
var view3 = null;

function showView1() {
	if (view1 == null) {
		view1 = new View1({ model: greeting });
	}
	container.myChildView = view1;
	container.render();
}

function showView2() {
	if (view2 == null) {
		view2 = new View2({ model: greeting });
	}

	container.myChildView = view2;
	container.render();
}