/*Ryan Slagle
June 10,2014
Expressions_Industry
 */

//Create variables that are relevant to my industry

var serviceFee = prompt("How much are you willing to pay an hour?");// Cost of services per hour
var hours = prompt("What is the estimated project time?");// Number of hours of work

var totalCost = Number(serviceFee) * Number(hours); //Total investment based on your calculations
var initialFee = prompt("How much was your initial investment?"); //Getting price of Initial investment
var totalInvestment = prompt(Number(totalCost) + Number(initialFee));// Prompt to answer investment for customer
var totalInvestment = Number(totalCost) + Number(initialFee);// Casting data into numbers

console.log(totalInvestment);





