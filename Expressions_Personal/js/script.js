//Ryan Slagle; June 10, 2014; Expressions_Personal


var golfRound = 18; //Allows for more than 1 round for calculations (constant)

var golfHoles = prompt("How many holes of golf are you playing?");//First Variable

var ballsUsed = prompt("How many balls do you loose in a round?");//Second Variable


var ballsNeeded = golfHoles / golfRound * ballsUsed + 1;// Adding 1 so you can finish the round!


console.log(ballsNeeded)



