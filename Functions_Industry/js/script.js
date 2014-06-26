/*
Ryan Slagle
June 25 2014
Functions Industry
 */

//A ternary
//An else if
//An anonymous function
//A normal "named" function
//An expression with two arithmetic operators
//A function with three parameters
//At least one logical operator

//Get numbers from the user

var attendance = prompt("Please type in a attendance of the game.");
//validate
while (isNaN(attendance)|| attendance===""){
    attendance = prompt("I need to know the games attendance.");
}

var capacity = prompt("Please type in a max number of people \nallowed in the stadium.");
//validate
while (isNaN(capacity)|| capacity===""){
    capacity = prompt("Please type in a maximum number of people\nallowed in the stadium.");
}

//Variable to catch the returned value
var results = fireCode(attendance, capacity);



if(results >= 0){
    alert("Enjoy The Game");
}else if(results >=-100){
    alert("Get a permit and your ok!");
}else{
    alert("Some fans need to leave.");
}
console.log(results);


//Create a function

function fireCode(present, allowed){
    var safe = allowed - present;
    //Return value
    return(safe);
}


