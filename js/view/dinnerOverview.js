
var DinnerOverviewView = function (container, model) {

   var gallery = container.find("#gallery");
   var dinnerCostDiv = container.find("#dinnerCost");
   this.recipeBtn = container.find("#recipeBtn");
	
   var loadDishes = function() {
    gallery.html("");
    var allDishesArr = model.getFullMenu();
    console.log(allDishesArr);
    for(dish of allDishesArr){
      var img = dish.image;
      var title = dish.title;
      var price = dish.pricePerServing*model.getNumberOfGuests();
      gallery.append('<div class="col-xs-12 col-sm-5 col-md-4 placeholder"><img src=' 
        + img + ' alt="bild"><div><h4>' + title + '</h4></div><p>' + price.toFixed(2) + ' SEK</p></div>');
    }
    var menuPrice = model.getTotalMenuPrice();
    dinnerCostDiv.html('<h3> Total Dinner Cost: ' + menuPrice.toFixed(2) + ' SEK</h3>');
  }



  this.show = function() {
      container.show();
      loadDishes();
  }

  this.hide = function() {
      container.hide();
  }

  loadDishes();

}
