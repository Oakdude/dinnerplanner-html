var AllDishesCtrl = function(view,model) {

	/*view.gallery.on("click", "dishSelector", function(){

        skicka med dishid på något sett och skriv en "selectDish" funktion i model? kanske?

        window.showView("detailedDish");

  	 var listener = function(evt){
   	window.showView("detailedDish");
   	evt.preventDefault();
   }

    });*/

 view.gallery.on("click", ".img", function(){
 	window.showView("detailedDish");

});
}
