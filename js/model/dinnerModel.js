//DinnerModel Object constructor
var DinnerModel = function() {

	//TODO Lab 1 implement the data structure that will hold number of guest
	// and selected dishes for the dinner menu
	var numberOfGuests = 1;
	var menu = [];
	var observers = [];
	var selectedDish = 0; //vårdan model är smartare
	var types = ['all','main course', 'side dish', 'dessert', 'appetizer', 'salad', 'bread', 'breakfast', 'soup', 'beverage', 'sauce', 'drink'];
	var baseURL = "http://sunset.nada.kth.se:8080/iprog/group/33/recipes/";

	this.addObserver = function(observer){
		observers.push(observer);
	}

	this.notifyObservers = function(arg){
		for(var i=0; i<observers.length; i++)
		{
			observers[i].update(arg);
		}
	}

	this.getTypes = function(){
		return types;
	}

	this.setSelectedDish = function(id, arg) {
		selectedDish = id;
		this.notifyObservers(arg);
	}

	this.getSelectedDish2 = function(){
		return selectedDish;
	}


	this.setNumberOfGuests = function(num) {
		//TODO Lab 1
		numberOfGuests = num;
		this.notifyObservers("numberOfGuestsChanged");
	}

	this.getNumberOfGuests = function() {
		//TODO Lab 1
		return numberOfGuests;
	}

	//Returns the dish that is on the menu for selected type
	this.getSelectedDish = function(type) {
			//TODO Lab 1
	   	for (dish of menu){
	      if(dish.type==type){
	        return menu[key];
	      }
	    }
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		//TODO Lab 1
    return menu;
	}

	//Returns all ingredients for all the dishes on the menu.

  this.getAllIngredients = function() {
		//TODO Lab 1
    var fullIngredients=[];
    for (dish of menu) {
			console.log("hejejerj");
      //fullIngredients.push(menu[i].ingredients);
      for (ingredient of dish.ingredients){
        fullIngredients.push(ingredient);
      }
    }
    return fullIngredients;
}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
  //Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function () {
		var menuPrice = 0;
		for (dish of menu) {
			menuPrice += dish.pricePerServing;
		}
		var a = this.getNumberOfGuests();
        return menuPrice*a;
}

	this.getDishIngredients = function(id) {
		var dishIngredients=[];
		this.fetchDish(id).then(dish=>{
			for(ingredient of dish.extendedIngredients){
				dishIngredients.push(ingredient);

			}

		});
		return dishIngredients;
	}

	this.getDishCost = function(id) {
		this.fetchDish(id).then(dish =>{
		var dishCost = dish.pricePerServing;
		return dishCost;
		});
	}

	this.getMenuNameAndCost = function() {
	var menuNameAndCost = [];
	for(var dish of menu){
		menuNameAndCost.push([dish.title, dish.pricePerServing]);
	}
	return menuNameAndCost;
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
  this.addDishToMenu = function(id) {
		//TODO Lab 1      Funkar kanske inte korrekt? vissa element verkar inte läggas till i menu
    /*for (dish of menu){
      if(dish.type==this.getDish(id).type){
         this.removeDishFromMenu(dish.id);
         dish==this.getDish(id);
         }
      }*/
    this.fetchDish(id).then(dish => {
    		menu.push(dish);
    		this.notifyObservers("dishAddedToMenu");
    	});

    }



	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		//TODO Lab 1			tror funkar korrekt
	    menu = menu.filter(dish => dish.id !== id);
			this.notifyObservers();
	}

	this.isDishInMenu = function(id) {
		for (dish of menu){
			if(dish.id == id){
				return true;
			}
		}
		return false;
	}
/*
		OLD FUNCTIONS

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (type,filter) {
	  return dishes.filter(function(dish) {
			var found = true;
			if(filter){
				found = false;
				dish.ingredients.forEach(function(ingredient) {
					if(ingredient.name.indexOf(filter)!=-1) {
						found = true;
					}
				});
			if(dish.name.toLowerCase().indexOf(filter) != -1)
			{
				found = true;
			}
		}
			if (type=="All types"){
			return true && found;
		}else{
	  	return dish.type == type && found;}
	  });
	}


	this.getDish = function (id) {
	  for(key in dishes){
			if(dishes[key].id == id) {
				return dishes[key];
			}
		}
	}
*/

	//function that returns a dish of specific ID
	this.getDish = function (id) {
	  this.fetchDish(id).then(dish =>{
	  	console.log(dish);
	  	return dish;
	  });

	}

	this.fetchDishSummary = function (id) {
		var url = baseURL + id + "/summary";
		return fetch(url,{
	            headers:{
	                "X-Mashape-Key": API_KEY,
	                "Access-Control-Allow-Origin" : "http://sunset.nada.kth.se:8080/iprog/group/33/recipes/"
	            }
	      }).then(handleHTTPError)
			.then(response => response.json())
	        .then(data => data);
	}

	this.fetchDish = function (id) {
		var url = baseURL + "informationBulk?ids=" + id;
		//var url = "http://sunset.nada.kth.se:8080/iprog/group/33/recipes/" + id + "/summary";
		return fetch(url,{
	            headers:{
	                "X-Mashape-Key": API_KEY,
	                "Access-Control-Allow-Origin" : "http://sunset.nada.kth.se:8080/iprog/group/33/recipes/"
	            }
	      }).then(handleHTTPError)
			.then(response => response.json())
	        .then(data => data[0]);

	}
	//testing api fetch ajax thing


	//working
	this.fetchAllDishes = function(type, filter) {
		var apiURL = "http://sunset.nada.kth.se:8080/iprog/group/33/recipes/search";
		var queryURL = apiURL;
		queryURL += "?type=" + type.replace(/\s/g, "+");
		if(filter) {
			queryURL += "&query=" + filter.replace(/\s/g, "+");
		}

		console.log(queryURL);
		return fetch(queryURL,{
	            headers:{
	                "X-Mashape-Key": API_KEY,
	                "Access-Control-Allow-Origin" : "http://sunset.nada.kth.se:8080/iprog/group/33/recipes/"

	            }
	      }).then(handleHTTPError)
					.then(response => response.json())
	        .then(data => data.results);

	}

	function handleHTTPError(response) {
  if(response.ok)
     return response;
  throw Error(response.statusText);
}

/*
//from postman code

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?X-Mashape-Key=3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767",
  "method": "GET",
  "headers": {
    "X-Mashape-Key": "3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767",
    "cache-control": "no-cache",
    "Postman-Token": "a8e9c6a2-12d0-4fc4-8bb5-5ab4d41801e0"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
*/



	// the dishes variable contains an array of all the
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name,
	// quantity (a number), price (a number) and unit (string
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':103,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];


}
