$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	// And create the instance of ExampleView
	//var exampleView = new ExampleView($("#sidebar"), model);
	var welcomeView = new WelcomeView($("#mainContainer"), model);
	var sidebarView = new SidebarView($("#sidebar"), model);
	var allDishesView = new AllDishesView($("#dashboard"), model);
	var dishDetailsView = new DishDetailsView($("#view3"), model);
	var view6 = new View6($("#view6"), model);
  	var view5 = new View5($("#myDinnerView"), model);
	var myDinnerHeader = new MyDinnerHeader($("#dinnerOverviewHeader"), model); 

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children
	 * of the specific view you're working with (see exampleView.js).
	 */

});
