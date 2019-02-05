var DishDetailsCtrl = function(view, model, app) {

  view.backBtn.click(function(){
  	app.showView("selectDishView");
  });

  view.addToMenuBtn.click(function(){
    var dishId = model.getSelectedDish2();
    model.addDishToMenu(dishId);
  });

}
