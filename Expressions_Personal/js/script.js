//Ryan Slagle; June 10, 2014; Expressions_Personal


var golfRound = 18;

var golfHoles = prompt("How many holes of golf are you playing?");

var ballsUsed = prompt("How many balls do you loose in a round?");


var ballsNeeded = prompt(golfHoles / golfRound * ballsUsed + 1);


console.log(ballsNeeded)



