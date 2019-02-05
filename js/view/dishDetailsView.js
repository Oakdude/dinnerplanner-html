
var DishDetailsView = function (container, model) {

   var dishDetails = container.find("#dishDetails");
   var title1 = container.find("#title");
   var dishImg = container.find("#dishImg");
   var dishDetailsText = container.find("#dishDetailsText");
   var tableBody = container.find("#tableBody");
   var ingredientsViewCost = container.find("#ingredientsViewCost");
   var ingredientsPeople = container.find("#ingredientsPeople");
   this.backBtn = container.find("#backToMainButton");
   this.addToMenuBtn = container.find("#addToMenuButton");

var loadDishDetails = function() {
  var dishId = model.getSelectedDish2();

  var dish = model.getDish(dishId);
  var img = dish.image;
  var title = dish.name;
  var desc = dish.description;
  title1.html("<b>" + title + "</b>");
  dishImg.html('<img src="images/' + img + '" alt="Dish"/>');
  dishDetailsText.html(desc);

  var dishIngredients = model.getDishIngredients(dishId);
  var totCost = 0;
  var p = model.getNumberOfGuests();
  tableBody.html("");
  for (ingredient of dishIngredients){

    var name = ingredient.name;
    var price = ingredient.price*p;
    var quantity = ingredient.quantity*p;
    var unit = ingredient.unit;
    totCost += price;
    tableBody.append("<tr><td>" +  quantity + " " + unit + "</td><td>" + name + "</td><td>SEK</td><td>" + price + "</td></tr>");

  }

  ingredientsViewCost.html("SEK" + " " + totCost);
  ingredientsPeople.html("<b>Ingredients for " +  p +" people</b>");

  var button = container.find("#addToMenuButton");
  
  if(model.isDishInMenu(dishId)){
    
    button.addClass("disabled");
    button.html("Dish already in menu")
  } else {
    button.removeClass("disabled");
    button.html("Add dish to menu")
  }
}



this.update = function(arg) {
  if(arg == "loadDishDetails"){
      loadDishDetails();
  } else if (arg == "numberOfGuestsChanged"){
      loadDishDetails();
  } else if (arg == "dishAddedToMenu"){
    loadDishDetails();
  }else {
      return;
  }

}

this.show = function() {
    container.show();
    this.update("loadDishDetails");
}

this.hide = function() {
    container.hide();
}

model.addObserver(this);


}
