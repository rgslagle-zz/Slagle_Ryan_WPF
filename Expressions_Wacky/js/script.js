//Ryan Slagle; June 10, 2014; Expressions_Wacky

//Create a wacky expression

alert("Teams in Baseball play 162 games a year.");

var totalWins = [66, 61, 71, 75, 83, 97, 85, 66, 79, 89];

var avgWins = (totalWins[0] + totalWins[1] + totalWins[2] + totalWins[3] + totalWins[4] + totalWins[5] + totalWins[6] + totalWins[7] +
    totalWins[8] + totalWins[9])/10;

//console.log(avgWins);

var guess = prompt("How many wins have the Cubs averaged over the last 10 years?");

alert("Actual average is " + avgWins); //Providing the answer to the question.

var difference = (avgWins - guess + " Nice Try!"); //Giving the user the difference in their answer and actual average.
alert(difference); //Providing the actual alert.

console.log(difference);//Printing out to the console.




