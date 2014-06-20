/*
Ryan Slagle
June 19, 2014
Conditional Industry
 */

//Creating conditional var for how many sales a company needs to buy supplies

var supplies = prompt("How much does your order of supplies cost?");
var eachSale = prompt("What is your average sale?");
var expenses = prompt("How much do you have in other expenses?");

if(eachSale > supplies && expenses< 1000){
    console.log("You can buy supplies");

}else{
    console.log("You need to make more sales!")
}