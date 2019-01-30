
var AllDishesView = function (container, model) {

    var gallery = container.find("#gallery");
    
    this.dishSelector = container.find(".dishSelector"); //dish to be clicked on
    this.dishTypeSelector = container.find("#dishTypeSelector"); //dish to be clicked on
    this.searchBtn = container.find("#searchBtn");
    this.searchInput = container.find("#searchInput");
    this.gallery = gallery;
    //this.index = document.getElementById("dishTypeSelector").selectedIndex;
    //console.log(this.index);


    //var allDishesArr = model.getLiterallyAllDishes();
    var loadDishes = function(dishes) {
        gallery.html("");
        var dishesArray = dishes;
       
        //console.log(this.allDishesArr);

        for(dish of dishesArray){
            var img = dish.image;
            var title = dish.name;
            var id = dish.id;

            gallery.append('<div data-dishid="' + id + '" class="col-xs-6 col-sm-5 col-md-4 col-lg-3 placeholder dishSelector"><img class="no-pointer" src="images/' + img + '" alt="bild"><div class="no-pointer"><h4>' + title + '</h4></div></div>');
        }
    }



    this.update = function(dishes) {
      loadDishes(dishes);
    }

    this.show = function() {
        container.show();
    }

    this.hide = function() {
        container.hide();
    }
    
    model.addObserver(this);
    loadDishes(model.getLiterallyAllDishes());
}
