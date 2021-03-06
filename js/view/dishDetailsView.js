
var DishDetailsView = function (container, model) {
   var loaderDiv = container.find("#loaderDiv");
   var dishDetails = container.find("#dishDetails");
   var preperationPara = container.find("#instructionsP");
   var title1 = container.find("#title");
   var dishImg = container.find("#dishImg");
   var dishSummaryDiv = container.find("#dishSummaryDiv");
   var tableBody = container.find("#tableBody");
   var totalDishCost = container.find("#ingredientsViewCost");
   var ingredientsPeople = container.find("#ingredientsPeople");
   this.backBtn = container.find("#backToMainButton");
   this.addToMenuBtn = container.find("#addToMenuButton");

   var dishId;
   var p;
   var dishPrice = 0;
   var ingredients = [];

var loadDishDetails = function() {

  tableBody.html("");
  title1.html("");
  dishImg.html("");
  totalDishCost.html("");
  dishSummaryDiv.html("");
  preperationPara.html("");

  var dishId = model.getSelectedDish2();
  var p = model.getNumberOfGuests();
  model.fetchDish(dishId).then(dish =>{ //promise1
    var img = dish.image;
    var title = dish.title;
    dishPrice = dish.pricePerServing*p;
    console.log(dishPrice);
    var instructions = dish.instructions;
    title1.html("<b>" + title + "</b>");
    dishImg.html('<img src=' + img + ' alt="Dish img"/>');
    preperationPara.html(instructions);

    for(ingredient of dish.extendedIngredients){

        ingredients.push(ingredient);
      }

  }).catch(error =>{
          console.log(error);
          this.update("error");
  });

  model.fetchDishSummary(dishId).then(dish =>{ //promise2
    loaderDiv.html("");
    var dishSummary = dish.summary;
    dishSummaryDiv.html(dishSummary);
    loadIngredients();
    loadAddButton();
  }).catch(error =>{
          console.log(error);
  });

}

var loadIngredients = function(){
  var dishId = model.getSelectedDish2();
  var p = model.getNumberOfGuests();


    tableBody.html("");
    for(ingredient of ingredients){
        var name = ingredient.name;
        var quantity = ingredient.amount*p;
        var price = 2*quantity;
        var unit = ingredient.unit;
        tableBody.append("<tr><td>" +  quantity.toFixed(2) + " " + unit + "</td><td>" + name + "</td><td>SEK</td><td>" + price.toFixed(2) + "</td></tr>");
      }

    ingredientsPeople.html("<b>Ingredients for " +  p +" people</b>");
    totalDishCost.html("SEK" + " " + dishPrice.toFixed(2));


}

var loadAddButton = function(){
  var dishId = model.getSelectedDish2();
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
      loaderDiv.html("<div class='container loader'></div>");
      loadDishDetails();
  } else if (arg == "numberOfGuestsChanged"){
      loadIngredients();
  } else if (arg == "dishAddedToMenu"){
    loadAddButton();
  } else if(arg == "error"){
      console.log("yeah");
      loaderDiv.html("");
  } else {
     return;
  }

}

this.show = function() {
      container.show()
      this.update("loadDishDetails");
}

this.hide = function() {
    container.hide();
}

model.addObserver(this);


}
