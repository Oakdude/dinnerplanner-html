var AllDishesCtrl = function(view,model) {

	/*view.gallery.on("click", "dishSelector", function(){

        skicka med dishid på något sett och skriv en "selectDish" funktion i model? kanske?

        window.showView("detailedDish");

  	 var listener = function(evt){
   	window.showView("detailedDish");
   	evt.preventDefault();
   }

    });

view.searchBtn.on("click", function(){
    console.log("clicked")
    var searchDish = view.searchInput.val();

    var matchedDishes = model.getAllDishes("", searchDish);
        view.update(matchedDishes);


});
*/
view.searchBtn.click(function(event){

    event.preventDefault();
    var searchDish = view.searchInput.val();
    var matchedDishes = model.getAllDishes(view.dishTypeSelector.val(), searchDish);

    view.loadDishes(matchedDishes);
  });

view.dishTypeSelector.on("change", function(){

        if(view.dishTypeSelector.val()=="All types"){

          noFilter = model.getLiterallyAllDishes();

          view.loadDishes(noFilter);
        }
        else {
        var type = view.dishTypeSelector.val();
        var dishesSpecialType = model.getAllDishes(type, "");

        view.loadDishes(dishesSpecialType);
      }

});


view.dishSelector.click(function(event){
  //event.preventDefault();
  var dishId = event.target.dataset.dishid;
  model.setSelectedDish(dishId, "changedSelectedDish");
  //event.preventDefault();
	window.showView("dishDetailsView");

});

}
