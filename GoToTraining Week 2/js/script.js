/*
Ryan Slagle
WPF 1406 Section 01
GoTo Training Example Week #2
 */

//alert("testing 1,2,3");

//Create a js file that will tell us how old we are

//Create a variable to hold persons name
var name = prompt("Please type in your name.");

//console.log out that name
console.log(name);


//alert the user and tell them hi

alert("Welcome " +name + " we have a few more questions for you!");

//Create variable and prompt user for date of birth

var yearBorn = prompt("What year where you born?");

console.log(yearBorn);

//create variable for current year
var currentYear = 2014

//calculate the persons age- save calculation as variable

var age = prompt(currentYear - yearBorn);

console.log(age);

//Tell the user how old they are

alert(name + " you are "+age+ " years old.");
console.log(name + " you are "+age+ " years old.");

//How old will you be in the future?

var yearMore = prompt("How many years in the future would you like?");
console.log(yearMore);

