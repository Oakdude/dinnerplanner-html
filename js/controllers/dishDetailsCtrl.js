var DishDetailsCtrl = function(view,model) {

  view.backBtn.click(function(){

  	window.showView("selectDishView");
  });

  view.addToMenuBtn.click(function(){
    var dishId = model.getSelectedDish2();
    model.addDishToMenu(dishId);

  });

}
