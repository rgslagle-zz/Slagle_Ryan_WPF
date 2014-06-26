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
    minNumber = prompt("I need to know the games attendance.");
}

var capacity = prompt("Please type in a max number of people \nallowed in the stadium.");
//validate
while (isNaN(capacity)|| capacity===""){
    minNumber = prompt("Please type in a maximum number of people\nallowed in the stadium.");
}


var results = randomNumber(minNumber, maxNumber);
alert("Your Random Number Is" + results);
console.log(results);

//Create a function

function fireCode(present, allowed){
    //generate random number
    var safe = allowed-present;
    //Return value
    return(safe);
}


