
var DishDetailsView = function (container, model) {



   var dishDetails = container.find("#dishDetails");
   var title1 = container.find("#title");
   var dishImg = container.find("#dishImg");
   var dishDetailsText = container.find("#dishDetailsText");
   var tableBody = container.find("#tableBody");
   var ingredientsViewCost = container.find("#ingredientsViewCost");



  var selectdish = 1;
  var dish = model.getDish(selectdish);
  var img = dish.image;
  console.log(img);
  var title = dish.name;
  console.log(title);
  var desc = dish.description;
  title1.append("<b>" + title + "</b>");
  dishImg.append('<img src="images/' + img + '" alt="Dish"/>');
  dishDetailsText.append(desc);

  var dishIngredients = model.getDishIngredients(selectdish);
  var totCost = 0;
  for (ingredient of dishIngredients){
    var name = ingredient.name;
    var price = ingredient.price;
    var quantity = ingredient.quantity;
    var unit = ingredient.unit;
    totCost += price;
    tableBody.append("<tr><td>" +  quantity + " " + unit + "</td><td>" + name + "</td><td>SEK</td><td>" + price + "</td></tr>");

  }

  ingredientsViewCost.append("SEK" + " " + totCost);


}
