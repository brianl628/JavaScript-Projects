function count_To_Ten() {   //While Loop Function
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Fruits = ["Apple", "Banana", "Orange", "Watermelon", "Kiwi"];   //For Loop Function
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Fruits.length; Y++) {
    Content += Fruits[Y] + "<br>";
    }
    document.getElementById("List_of_Fruits").innerHTML = Content;
}

function array_Function() {     //Array Function
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[3] = "eating";
    Cat_Picture[4] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Picture[3] + ".";
}

var X = 82;             //Function utilizing "let"
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);