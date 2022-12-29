function subtraction_Function() {   //Subtraction Function
    var subtraction = 50 - 10;
    document.getElementById("Math").innerHTML = "50-10 = " + subtraction;
}

function multiplication() { //Multiplication Function
    var simple_Math = 6 * 8;
    document.getElementById("Math").innerHTML = "6 * 8 = " + simple_Math;
}

function addition_Function() {      //Addition Function
    var addition = 48 + 6;
    document.getElementById("Math").innerHTML = "48 + 6 = " + addition;
}

function modulus_Operator() {   //Modulus function
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {      //Makes values negative
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}

var X = 5;
X++;
document.write(X);

var X = 5.25;
X--;
document.write(X);

window.alert(Math.random());
