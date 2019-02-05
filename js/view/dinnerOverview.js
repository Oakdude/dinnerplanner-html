
var DinnerOverviewView = function (container, model) {

   var gallery = container.find("#gallery");
   var dinnerCostDiv = container.find("#dinnerCost");
   this.recipeBtn = container.find("#recipeBtn");
	
   var loadDishes = function() {
    gallery.html("");
    var allDishesArr = model.getFullMenu();
    for(dish of allDishesArr){
      var img = dish.image;
      var title = dish.name;
      var price = model.getDishCost(dish.id)*model.getNumberOfGuests();;
      gallery.append('<div class="col-xs-12 col-sm-5 col-md-4 placeholder"><img src="images/' 
        + img + '" alt="bild"><div><h4>' + title + '</h4></div><p>' + price + ' SEK</p></div>');
    }
    var menuPrice = model.getTotalMenuPrice();
    dinnerCostDiv.html('<h3> Total: ' + menuPrice + ' SEK</h3>');
  }

  this.update = function() {
  loadDishes();
  }

  this.show = function() {
      container.show();
  }

  this.hide = function() {
      container.hide();
  }


model.addObserver(this);
  loadDishes();

  

}
