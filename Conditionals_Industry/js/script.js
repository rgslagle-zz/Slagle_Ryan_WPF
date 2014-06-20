/*
Ryan Slagle
June 19, 2014
Conditional Industry
 */

//Creating conditional var for how many sales a company needs to buy supplies

var supplies = prompt("How much does your order of supplies cost?");
var eachSale = prompt("What is your average sale?");
var expenses = prompt("How much do you have in other expenses?");
//create conditionals to determine if sales allow for supplies purchase
if(eachSale > supplies && expenses< 1000){
    //Print out to the console, and give the user an alert
    console.log("You can buy supplies");
    alert("You can buy your supplies!")
}else{
    console.log("You need to make more sales!")
    alert("You need to make more sales!")
}