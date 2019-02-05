var MyDinnerHeader = function (container, model) {

   	var guestsNum = container.find("#guestsView5and6");
	this.backBtn2 = container.find("#backEditDinnerBtn");


var loadGuests = function() {
    var a = model.getNumberOfGuests();
    guestsNum.html("<h3>My Dinner: " + a + " people</h3>");
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
