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

var minNumber = prompt("Please type in a minimum number.");
//validate
while (isNaN(minNumber)|| minNumber===""){
    minNumber = prompt("Please type in a minimum number.");
}

var maxNumber = prompt("Please type in a max number.");
//validate
while (isNaN(maxNumber)|| maxNumber===""){
    minNumber = prompt("Please type in a maximum number.");
}

//Call Function
//With Arguments
//randomNumber(20,50);
//randomNumber(0, 5);

randomNumber(minNumber, maxNumber);


//Create a function

function randomNumber(minNum, maxNum){
    //generate random number
    var random = Math.random()*(maxNum-minNum)+Number(minNumber);
    console.log(random);
}

