var DinnerOverviewCtrl = function(view,model, app) {

  view.recipeBtn.click(function(){
    app.showView("printoutView");
  });
  
}
