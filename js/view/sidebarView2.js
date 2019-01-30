var SidebarView = function (container, model) {

  var main = document.getElementById("mainRow");


/*
  var sidebarDiv = document.createElement("div");
    sidebarDiv.setAttribute("id", "sidebar");
    sidebarDiv.setAttribute("class", "col-md-2 sidebar");
    var navbar = document.createElement("nav");
      navbar.setAttribute("class", "navbar navbar-default");

      var navHeader = document.createElement("div");
        navHeader.setAttribute("class", "navbar-header");
        var navToggleBtn = document.createElement("button");
          navToggleBtn.setAttribute("type", "button");
          navToggleBtn.setAttribute("class", "navbar-toggle collapsed");
          navToggleBtn.setAttribute("data-toggle", "collapse");
          navToggleBtn.setAttribute("data-target", "#myDinnerCollapse1");
          navToggleBtn.setAttribute("aria-expanded", "#false");
          var span = document.createElement("span");
            span.setAttribute("class", "sr-only");
          var span1 = document.createElement("span");
            span.setAttribute("class", "icon-bar");
          var span2 = document.createElement("span");
            span.setAttribute("class", "icon-bar");
          var span3 = document.createElement("span");
            span.setAttribute("class", "icon-bar");
          navToggleBtn.append(span);
          navToggleBtn.append(span1);
          navToggleBtn.append(span2);
          navToggleBtn.append(span3);
        var hDiv = document.createElement("div");
          var h = document.createElement("h2");
          h.innerHTML = "My Dinner";
          hDiv.append(h);
        navHeader.append(navToggleBtn);
        navHeader.append(hDiv);
var loadSidebar = function() {
    var collapseDiv = document.createElement("div");
      collapseDiv.setAttribute("class", "collapse navbar-collapse");
      collapseDiv.setAttribute("id", "myDinnerCollapse1");
      var formDiv = document.createElement("div");
        formDiv.setAttribute("class", "col-xs-12");
        var form = document.createElement("form");
          form.setAttribute("id", "people");
          form.setAttribute("class", "navbar-form");
        formDiv.append(form);
      var tableDiv = document.createElement("div");
        var table = document.createElement("table");
          table.setAttribute("id", "addedDishesTable");
          table.setAttribute("class", "table table-striped table-hover");
          var thead = document.createElement("thead");
            var tr = document.createElement("tr");
              var th1 = document.createElement("th");
                th1.innerHTML = "Dish";
              var th2 = document.createElement("th");
                th2.innerHTML = "Cost";
              tr.append(th1);
              tr.append(th2);
            thead.append(tr);
          var tbody = document.createElement("tbody");
            tbody.setAttribute("id", "sidebarTable");
          table.append(thead);
          table.append(tbody);
        tableDiv.append(table);
      var tCostDiv = document.createElement("div");
        tCostDiv.setAttribute("id", "sidebarTotalCost");
        tCostDiv.setAttribute("class", "text-right totalCost");
      var btnDiv = document.createElement("div");
        btnDiv.setAttribute("class", "text-center");
        var confirmBtn = document.createElement("button");
          confirmBtn.setAttribute("type", "button");
          confirmBtn.setAttribute("id", "confirmDinnerBtn");
          confirmBtn.setAttribute("class", "btn btn-md");
          var textSpan = document.createElement("span");
            textSpan.innerHTML = "Confirm Dinner";
          confirmBtn.append(textSpan);
        btnDiv.append(confirmBtn);
      collapseDiv.append(formDiv);
      collapseDiv.append(tableDiv);
      collapseDiv.append(tCostDiv);
      collapseDiv.append(btnDiv);
    navbar.append(navHeader);
    navbar.append(collapseDiv);
  sidebarDiv.append(navbar); */




var n = model.getNumberOfGuests();
var dishesArr = model.getMenuNameAndCost();
var tCost = 0;
for(dish of dishesArr){
  tCost += dish[1]*n;
  var tRow = document.createElement("tr");
  let th1 = document.createElement("th");
    th1.append(dish[0]);
  let th2 = document.createElement("th");
    th2.append(dish[1]*n);
  tRow.append(th1);
  tRow.append(th2);
  tbody.append(tRow);
}
tCostDiv.append("SEK " + tCost);

var div1 = document.createElement("div");
div1.setAttribute("class", "form-group-md");
var label = document.createElement("label");
  label.setAttribute("for", "numberOfGuests");
  label.innerHTML = "People";
var input = document.createElement("input");
  input.setAttribute("id", "numberOfGuests");
  input.setAttribute("class", "input-sm");
  input.setAttribute("type", "number");
  input.setAttribute("value", n);
div1.append(label);
div1.append(input);

form.append(div1);

main.append(sidebarDiv);


this.update = function() {
    loadSidebar();
  }

this.show = function() {
      container.show();

  }

  this.hide = function() {
      container.hide();
  }

model.addObserver(this);

}

/*
<div id="sidebar" class="col-md-2 sidebar"> <!-- sidebar absolute/fixed för olika bra-->
    <nav class="navbar navbar-default">
      <div class="navbar-header">
        <!-- Button that toggles the navbar on and off on small screens -->
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#myDinnerCollapse1" aria-expanded="false">
        <!-- Hides information from screen readers -->
          <span class="sr-only"></span>
          <!-- button icon bars -->
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <div>
        <h2>My Dinner</h2>
        </div>
      </div> <!-- end of nav header-->

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="myDinnerCollapse1">

        <div class="col-xs-12">
          <form id="people" class="navbar-form">
            <!--<div class="form-group-md">
              <label for="numberOfGuests">People</label>
              <input id="numberOfGuests" class="input-sm" type="number" value="0" placeholder="0">
            </div>-->
          </form>
        </div>

        <div>
          <table id="addedDishesTable" class="table table-striped table-hover table">
            <thead>
              <tr>
                <th>Dish </th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody id="sidebarTable">
              <!-- ADD DISHES & COST HERE in <tr><td></td></tr>s-->

            </tbody>
          </table>
        </div>

      <div id="sidebarTotalCost" class="text-right totalCost">

      </div>

      <div class="text-center">
          <!-- Knappen ska vara disabled när ingenting har lagts till i menyn -->
          <button id="confirmDinnerBtn" type="button" class="btn btn-md"><span>Confirm Dinner</span></button>
      </div>
    </div><!-- navbar-collapse -->
  </nav>
</div> <!-- end of sidebar --> */
