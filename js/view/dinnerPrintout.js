
var View6 = function (container, model) {

   var printout = container.find("#printout");


	var allDishesArr = model.getFullMenu();
	 for(dish of allDishesArr){
     var img = dish.image;
     console.log(img);
     var title = dish.name;
     var desc = dish.description;
     console.log(title);

     var preperationP = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>";

     printout.append('<div id="row" class="container-fluid"><div class="img col-md-2"><img src="images/' + img + '"></div><div id="desc" class="col-md-4"><h2>' + title + '</h2><p>' + desc + '</p></div><div id="prepare" class="col-md-5"><h3>Preparations</h3>' + preperationP + '</div></div>');


	}


}
