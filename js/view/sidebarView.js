
var SidebarView = function (container, model) {

	var addedDishes = container.find("#sidebarTable");
	var cost = container.find("#sidebarTotalCost");
	var numGuests = container.find("#numberOfGuests");
	var people = container.find("#people");


var loadSidebar = function() {
	var a = model.getNumberOfGuests();
	var dishesArr = model.getMenuNameAndCost();
	var tCost = 0;
	addedDishes.html("");
	cost.html("");
	people.html("");
	for(dish of dishesArr){
		tCost += dish[1]*a;
		addedDishes.append("<tr><th>" + dish[0] + "</th>" + "<th>" + dish[1]*a + "</th></tr>");
	}

	cost.append("SEK " + tCost);
	b = model.getNumberOfGuests();
	people.append('<div class="form-group-md"><label for="numberOfGuests">People</label><input id="numberOfGuests" min=0 class="input-sm" type="number" value="' + b + '"></div>');
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
loadSidebar();

this.confirmBtn = container.find("#confirmDinnerBtn");
this.inputGuests = container.find("#numberOfGuests");
}
