
var AllDishesView = function (container, model) {

    var gallery = container.find("#gallery");
    var dishTypeSelector = container.find("#dishTypeSelector"); //dish to be clicked on
    this.searchInput = container.find("#searchInput");
    this.searchBtn = container.find("#searchBtn");
    this.dishSelector = container.find(".dishSelector"); //dish to be clicked on
    var types = model.getTypes();
    this.gallery = gallery;
    this.dishTypeSelector = dishTypeSelector;

    var addTypesToSelector = function(){
      dishTypeSelector.html("");
      for(type of types){
              option = "<option value='"+type+"'>" + type.charAt(0).toUpperCase()+type.slice(1) + "</option>";
          
          dishTypeSelector.append(option);
        }
    }

    this.loadDishes = function() {
        gallery.html("");

        var type = this.dishTypeSelector.val();
        console.log(type);
        var search = this.searchInput.val().toLowerCase();
        gallery.html("<div class='container loader'></div>");
        model.fetchAllDishes(type, search).then(dishes => {
          if(dishes.length==0){
            let typeString ="";
            if(type!=="all"){
              typeString = ' with type "' + type + '"';
            }
            gallery.html('<b>No matches found for "' + search + '"' + typeString + '.</b>');
          }else{
            gallery.html("");
          }
          for(dish of dishes){
              var img = dish.image;
              var title = dish.title;
              var id = dish.id;

              gallery.append('<div id="'
                  + id
                  + '" class="col-xs-12 col-sm-6 col-md-4 col-lg-3 placeholder dishSelector"><img class="no-pointer" src="https://spoonacular.com/recipeImages/'
                  + img
                  + '" alt="bild"><div class="no-pointer"><h4>'
                  + title
                  + '</h4></div></div>'); // data-dishid="' + id
          }
        }).catch(error =>{
          console.log(error);
        });

    }

    this.update = function(arg) {
        if(arg == "filterDishes"){
            this.loadDishes();
        }
        else {
            return;
        }
    }

    this.show = function() {
        container.show();
    }

    this.hide = function() {
        container.hide();
    }

    model.addObserver(this);
    addTypesToSelector();
    this.loadDishes();

}
