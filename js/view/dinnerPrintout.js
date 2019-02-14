
var PrintoutView = function (container, model) {

   var printout = container.find("#printout");

   var loadDishes = function() {
	    var allDishesArr = model.getFullMenu();
      printout.html("");
	    for(dish of allDishesArr){
        
        var lorem = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>";


          var dishSummary = lorem;
          var img = dish.image;
          var title = dish.title;
          var preperationP = dish.instructions;

        printout.append('<div id="row" class="container-fluid"><div class="img col-md-2"><img src="' + img + '"></div><div id="desc" class="col-md-4"><h2>' + title + '</h2><p>' + dishSummary + '</p></div><div id="prepare" class="col-md-5"><h3>Preparations</h3>' + preperationP + '</div></div>');
      
      }

	 }


  this.show = function() {
      container.show();
      loadDishes();
  }

  this.hide = function() {
      container.hide();
  }


  
  loadDishes();
}
