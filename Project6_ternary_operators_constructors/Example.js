function count_Function() {     //Nested function
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 8;
        function Plus_one() {Starting_point += 10;}
        Plus_one();
        return Starting_point;
    }
}