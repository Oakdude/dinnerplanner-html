
var WelcomeView = function (container, model) {

var mainWelcome = document.getElementById("mainRow");

var welcomeText = "Welcome to Dinner Planner! Lorem ipsum och så vidare sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
	
	var divContainer = document.createElement("div");
	divContainer.setAttribute("class", "container");

	var divWelcome = document.createElement("div");
	divWelcome.setAttribute("class", "jumbotron text-center")
	divWelcome.setAttribute("id", "welcomeDiv")

	var paraWelcome = document.createElement("p");
	paraWelcome.setAttribute("id", "welcomeText");

	var welcomeNewDinnerBtn = document.createElement("button");
	welcomeNewDinnerBtn.setAttribute("type", "button");
	welcomeNewDinnerBtn.setAttribute("class", "btn btn-lg");

	var btnSpan = document.createElement("span");
	btnSpan.innerHTML= "Create New Dinner";

	welcomeNewDinnerBtn.append(btnSpan);


	paraWelcome.append(welcomeText);
	divWelcome.append(paraWelcome);
	divWelcome.append(welcomeNewDinnerBtn);
	divContainer.append(divWelcome);
	mainWelcome.append(divContainer);

}

