var AllDishesCtrl = function(view,model) {

	/*view.gallery.on("click", "dishSelector", function(){

        skicka med dishid på något sett och skriv en "selectDish" funktion i model? kanske?

        window.showView("detailedDish");

  	 var listener = function(evt){
   	window.showView("detailedDish");
   	evt.preventDefault();
   }

    });*/

/*view.searchBtn.on("click", function(){
    console.log("clicked")
    var searchDish = view.searchInput.val();

    var matchedDishes = model.getAllDishes("", searchDish);
        view.update(matchedDishes);


});*/

view.searchBtn.click(function(){
  console.log("clicked")
    var searchDish = view.searchInput.val();
  });

view.dishTypeSelector.on("change", function(){

        if(view.dishTypeSelector.val()=="All types"){
          noFilter = model.getLiterallyAllDishes();
          
          view.update(noFilter);
        }
        else {
        var type = view.dishTypeSelector.val();
        dishesSpecialType = model.getAllDishes(type, "");
        view.update(dishesSpecialType);
      }
});


view.dishSelector.click(function(event){
  var dishId = event.target.dataset.dishid;
  console.log("hiasdasd");
  model.setClickedDish(dishId);
  console.log(model.getClickedDish());
	window.showView("dishDetailsView");

});

}
