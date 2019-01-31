var SidebarCtrl = function(view,model) {
  view.confirmBtn.click(function(){
    window.showView("dinnerOverviewView");

  });

  view.inputGuests.on("click", function(){
    var num = view.inputGuests.val();
    console.log(num);
    model.setNumberOfGuests(num);

  });
}
