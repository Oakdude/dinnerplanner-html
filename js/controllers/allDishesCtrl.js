var AllDishesCtrl = function(view, model, app) {


view.searchBtn.click(function(event){
  event.preventDefault();
  view.update("filterDishes");

});

view.dishTypeSelector.on("change", function(){
  view.update("filterDishes");


});

view.gallery.on("click", ".dishSelector", function(){

        var dishId = $(this).attr("id");
        console.log(dishId);
        model.setSelectedDish(dishId);
        app.showView("dishDetailsView");

    });


}
