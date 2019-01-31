
var AllDishesView = function (container, model) {

    var gallery = container.find("#gallery");
    this.dishTypeSelector = container.find("#dishTypeSelector"); //dish to be clicked on
    this.searchInput = container.find("#searchInput");
    this.searchBtn = container.find("#searchBtn");
    this.dishSelector = container.find(".dishSelector"); //dish to be clicked on

    this.gallery = gallery;
    //this.index = document.getElementById("dishTypeSelector").selectedIndex;
    //console.log(this.index);


    //var allDishesArr = model.getLiterallyAllDishes();
    this.loadDishes = function(dishes) {
        gallery.html("");

        for(dish of dishes){
            var img = dish.image;
            var title = dish.name;
            var id = dish.id;

            gallery.append('<div data-dishid="' + id + '" class="col-xs-6 col-sm-5 col-md-4 col-lg-3 placeholder dishSelector"><img class="no-pointer" src="images/' + img + '" alt="bild"><div class="no-pointer"><h4>' + title + '</h4></div></div>');
        }
        this.gallery = gallery;
        this.dishSelector = container.find(".dishSelector"); //dish to be clicked on
    }


    this.update = function(arg) {
      if(arg == "changedSelectedDish"){
        return;
      }else if(arg == "dishAddedToMenu"){
        return;
      }
      loadDishes();
    }

    this.show = function() {
        container.show();
    }

    this.hide = function() {
        container.hide();
    }

    model.addObserver(this);
    this.loadDishes(model.getLiterallyAllDishes());



}
