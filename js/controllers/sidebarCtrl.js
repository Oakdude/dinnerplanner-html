var SidebarCtrl = function(view, model, app) {

  view.confirmBtn.click(function(){
    app.showView("dinnerOverviewView");
  });

  view.plusButton.click(function(){
    model.setNumberOfGuests(model.getNumberOfGuests() + 1);
  });

  view.minusButton.click(function(){
  	if(model.getNumberOfGuests() === 0){
  		return;
  	}else{
    	model.setNumberOfGuests(model.getNumberOfGuests() - 1);
    }
  });

}
