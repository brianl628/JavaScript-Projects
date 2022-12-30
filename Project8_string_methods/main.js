function full_Sentence() {              //Concatenate different variables into a full sentence
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {               //Slice up sentence to display a specific amount of characters
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,40);
    document.getElementById("Slice").innerHTML = Section;
}

function string_Method() {          //Returns the number as a string
    var X = 180;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {       //Precision function, rounds to the 10th place
    var X = 3.14159265;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}