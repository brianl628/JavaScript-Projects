function my_Dictionary() {      //Dictionary function
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound;        //Delete operator
    document.getElementById("Dictionary").innerHTML = Animal.Sound;   //Displays animal species
}
