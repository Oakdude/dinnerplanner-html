
var DinnerOverviewView = function (container, model) {

   var gallery = container.find("#gallery");
   this.recipeBtn = container.find("#recipeBtn");
	
   var loadDishes = function() {
    gallery.html("");
    var allDishesArr = model.getFullMenu();
    for(dish of allDishesArr){
      var img = dish.image;
      var title = dish.name;
      gallery.append('<div class="col-xs-12 col-sm-5 col-md-4 placeholder"><img src="images/' + img + '" alt="bild"><div><h4>' + title + '</h4></div></div>');
    }
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
