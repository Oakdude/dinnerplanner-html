
var DishDetailsView = function (container, model) {

   var dishDetails = container.find("#dishDetails");
   var title1 = container.find("#title");
   var dishImg = container.find("#dishImg");
   var dishDetailsText = container.find("#dishDetailsText");
   var tableBody = container.find("#tableBody");
   var ingredientsViewCost = container.find("#ingredientsViewCost");
   var ingredientsPeople = container.find("#ingredientsPeople");
   this.backBtn = container.find("#backToMainButton");

var loadDishDetails = function() {
  var selectdish = model.getClickedDish();
  console.log(selectdish);
  var dish = model.getDish(selectdish);
  var img = dish.image;
  var title = dish.name;
  var desc = dish.description;
  title1.html("<b>" + title + "</b>");
  dishImg.html('<img src="images/' + img + '" alt="Dish"/>');
  dishDetailsText.html(desc);

  var dishIngredients = model.getDishIngredients(selectdish);
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
}



this.update = function() {
      loadDishDetails();
    }

this.show = function() {
    container.show();
}

this.hide = function() {
    container.hide();
}

model.addObserver(this);


}
