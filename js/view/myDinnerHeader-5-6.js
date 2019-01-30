
var MyDinnerHeader = function (container, model) {

   this.guestsNum = container.find("#guestsView5-6");

this.loadGuests = function() {
    var a = model.getNumberOfGuests();
    guestsNum.append("<h3>My Dinner: " + a + " people</h3>");
}
this.update = function() {
    loadGuests();
  }

this.show = function() {
    container.show();

}

this.hide = function() {
    container.hide();
}


model.addObserver(this);
}
