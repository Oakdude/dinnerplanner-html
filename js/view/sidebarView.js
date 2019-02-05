
var SidebarView = function (container, model) {

	this.confirmBtn = container.find("#confirmDinnerBtn");
	this.inputGuests = container.find("#numberOfGuests");
	this.minusButton = container.find('#minusGuest');
	this.plusButton = container.find('#plusGuest');

	var addedDishesTable = container.find("#sidebarTable");
	var cost = container.find("#sidebarTotalCost");
	var numGuests = container.find("#numberOfGuests");
	var people = container.find("#people");


var loadSidebar = function() {
	var a = model.getNumberOfGuests();
	var dishesArr = model.getMenuNameAndCost();
	var tCost = model.getTotalMenuPrice();
	addedDishesTable.html("");

	for(dish of dishesArr){
		addedDishesTable.append("<tr><th>" + dish[0] + "</th>" + "<th>" + dish[1]*a + "</th></tr>");
	}

	cost.html("SEK " + tCost);
	b = model.getNumberOfGuests();
	numGuests.html(b);
	
	container.find("#confirmDinnerBtn").removeClass("disabled");
	if(dishesArr.length < 1 || dishesArr == undefined){
		container.find("#confirmDinnerBtn").addClass("disabled");
	}
	
}

this.update = function() {
    loadSidebar();
  }

this.show = function() {
      container.show();
  }

  this.hide = function() {
      container.hide();
  }

model.addObserver(this);
this.update();

}
