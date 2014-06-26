/*
Ryan Slagle
June 25 2014
Functions Wacky
 */

//A ternary
//An else if
//An anonymous function
//A normal "named" function
//An expression with two arithmetic operators
//A function with three parameters.
//At least one logical operation

var winningGames = prompt("How many wins does your team have?");
var lossingGames = prompt("How many losses does your team have?");
function totalGames(){//Creating a basic function
    var wins = winningGames;//variables within the function
    var losses = lossingGames;
    var gamesPlayed = wins + losses;
    console.log(gamesPlayed);
}

while (isNaN(minNumber)|| minNumber===""){
    minNumber = prompt("Please type in a minimum number.");
}

totalGames();//Invoking the function
