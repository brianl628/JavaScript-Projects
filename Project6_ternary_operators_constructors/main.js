function Vehicle(Make, Model, Year, Color) {        //Constructor function
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");                  //New and This Keywords
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Money_Function() {
    var Amount, Can_afford;
    Amount = document.getElementById("Amount").value;
    Can_afford = (Amount < 5000) ? "You don't have enough money":"You have enough money";
    document.getElementById("Buy").innerHTML = Can_afford + " to buy this.";
}
