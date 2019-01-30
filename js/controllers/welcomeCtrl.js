var WelcomeCtrl = function(view, model) {

	view.welcomeNewDinnerBtn.click(function(){
        window.showView("selectDishView");
    
});

}
    /*var listener= function(evt){
      alert(evt.type+' event on "'+evt.target.innerHTML+'"');
      evt.preventDefault();
    }
    document.getElementById("createNewDinnerBtn").addEventListener("click", listener , false);
*/

