
var MyDinnerHeader = function (container, model) {

   var guestsNum = container.find("#guestsView5-6");

    var a = model.getNumberOfGuests();
    guestsNum.append("<h3>My Dinner: " + a + " people</h3>");


}
