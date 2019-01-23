
var AllDishesView = function (container, model) {


  var gallery = container.find("#gallery");

	var allDishesArr = model.getLiterallyAllDishes();
	 for(dish of allDishesArr){
     var img = dish.image;
     console.log(img);
     var title = dish.name;
     console.log(title);
     gallery.append('<div class="col-xs-6 col-sm-5 col-md-4 col-lg-3 placeholder"><img src="images/' + img + '" alt="bild"><div><h4>' + title + '</h4></div></div>');

	}


}
