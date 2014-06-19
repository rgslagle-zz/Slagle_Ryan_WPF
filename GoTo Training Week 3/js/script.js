/*
Ryan Slagle
WPF 1406 Section 01
GoTo Training Week 3
*/

//alert("testing 1,2,3");
//Code to check how many pears are in a fruit bowl

//Create our "fruit bowl"
//Create an Array

var bowlOfFruit = ["Apple", "Banana", "Pear", "Peach", "Pear"];

console.log(bowlOfFruit);

//Access individual item with index number
//Create var that will track how many pears we have in total
var totalNumPears = 0;

console.log(bowlOfFruit[1]);

//length of the Array
console.log(bowlOfFruit.length);

//Counting how many pears are in the bowl?

//Test each fruit and see if it is a pear

if(bowlOfFruit[0]==="Pear"){

    //count that fruit as a Pear
    //add 1 to the variable totalNumPears
    totalNumPears++;
}else{
    console.log("Fruit is not a Pear");

}





