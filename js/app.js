$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	// And create the instance of ExampleView
	//var exampleView = new ExampleView($("#sidebar"), model);
	//var welcomeView = new WelcomeView($("#mainContainer"), model);
	var welcomeView = new WelcomeView($("#welcomeDiv"), model);
	var welcomeCtrl = new WelcomeCtrl(welcomeView, model);

	var sidebarView = new SidebarView($("#sidebar"), model);
	var sidebarCtrl = new SidebarCtrl(sidebarView, model);

	var allDishesView = new AllDishesView($("#dashboard"), model);
	var allDishesCtrl = new AllDishesCtrl(allDishesView, model);

	var dishDetailsView = new DishDetailsView($("#view3"), model);
	var dishDetailsCtrl = new DishDetailsCtrl(dishDetailsView, model);

	var myDinnerHeader = new MyDinnerHeader($("#dinnerOverviewHeader"), model);
	var myDinnerHeaderCtrl = new MyDinnerHeaderCtrl(myDinnerHeader, model);

	var printoutView = new PrintoutView($("#view6"), model);
	var printoutCtrl = new PrintoutCtrl(printoutView, model);

  	var dinnerOverviewView = new DinnerOverviewView($("#myDinnerView"), model);
	var dinnerOverviewCtrl = new DinnerOverviewCtrl(dinnerOverviewView, model);


	window.showView = function(view) {
		if (view == "welcomeView"){
			welcomeView.show();
			sidebarView.hide();
			allDishesView.hide();
			dishDetailsView.hide();
			myDinnerHeader.hide();
			printoutView.hide();
			dinnerOverviewView.hide();

		}
		if (view == "selectDishView"){
			welcomeView.hide();
			sidebarView.show();
			allDishesView.show();
			dishDetailsView.hide();
			myDinnerHeader.hide();
			printoutView.hide();
			dinnerOverviewView.hide();
		}
		if (view == "dishDetailsView"){
			welcomeView.hide();
			sidebarView.show();
			allDishesView.hide();
			dishDetailsView.show();
			myDinnerHeader.hide();
			printoutView.hide();
			dinnerOverviewView.hide();
		}

	}
	showView("welcomeView");

	//$("#sidebar").hide();
	//$("#dashboard").hide();
	//$("#view3").hide();
	//$("#dinnerOverviewHeader").hide();
	//$("#view6").hide();
	//$("#myDinnerView").hide();






	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children
	 * of the specific view you're working with (see exampleView.js).
	 */

});
