$(function() {

	var model = new DinnerModel();

	var welcomeView = new WelcomeView($("#welcomeDiv"), model);
	var welcomeCtrl = new WelcomeCtrl(welcomeView, model, this);

	var sidebarView = new SidebarView($("#sidebar"), model);
	var sidebarCtrl = new SidebarCtrl(sidebarView, model, this);

	var allDishesView = new AllDishesView($("#dashboard"), model);
	var allDishesCtrl = new AllDishesCtrl(allDishesView, model, this);

	var dishDetailsView = new DishDetailsView($("#view3"), model);
	var dishDetailsCtrl = new DishDetailsCtrl(dishDetailsView, model, this);

	var myDinnerHeader = new MyDinnerHeader($("#dinnerOverviewHeader"), model);
	var myDinnerHeaderCtrl = new MyDinnerHeaderCtrl(myDinnerHeader, model, this);

	var printoutView = new PrintoutView($("#view6"), model);
	var printoutCtrl = new PrintoutCtrl(printoutView, model, this);

  	var dinnerOverviewView = new DinnerOverviewView($("#myDinnerView"), model);
	var dinnerOverviewCtrl = new DinnerOverviewCtrl(dinnerOverviewView, model, this);

	var hideAllViews = function(){
		welcomeView.hide();
		sidebarView.hide();
		allDishesView.hide();
		dishDetailsView.hide();
		myDinnerHeader.hide();
		printoutView.hide();
		dinnerOverviewView.hide();
	}

	this.showView = function(view) {
		hideAllViews();

		if (view == "welcomeView"){
			welcomeView.show();
		}

		if (view == "selectDishView"){
			sidebarView.show();
			allDishesView.show();
		}

		if (view == "dishDetailsView"){
			sidebarView.show();
			dishDetailsView.show();
		}

		if (view == "dinnerOverviewView"){
			myDinnerHeader.show();
			dinnerOverviewView.show();
		}

		if (view == "printoutView"){
			myDinnerHeader.show();
			printoutView.show();
		}

	}

	this.showView("welcomeView");


});
