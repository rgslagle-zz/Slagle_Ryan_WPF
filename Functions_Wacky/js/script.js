/*
Ryan Slagle
June 25 2014
Functions Wacky
 */

//Letting the user know if they had a good season or not based on wins and losses based on how many games they played.
var winningGames = prompt("How many wins does your team have?");
//validated
while (isNaN(winningGames)|| winningGames==="") {
    winningGames = prompt("Please type in a minimum number.");
}
//variable
var lossingGames = prompt("How many losses does your team have?");
//validated
while (isNaN(lossingGames)|| lossingGames==="") {
    lossingGames = prompt("Please type in a minimum number.");
}

function totalGames(){//Creating a basic function
    var wins = winningGames;//variables within the function
    var lose = lossingGames;
    var gamesPlayed = Number(wins) + Number(lose);
}

totalGames(Number(winningGames + lossingGames));//Invoking the function

//Ternary Operator
(winningGames > lossingGames) ? alert("Great Season!") : alert("Better Luck Next Year!")
