/*
Ryan Slagle
June 19, 2014
Conditional Wacky
 */
//Going to a baseball game and need to know what to take.

var temp = prompt("What is the temperature outside?");

if(temp===""){
    temp = prompt("What is the temperature outside?");

}
var hat;
//Ternary operator
hat = (temp >= 80) ? "Wear sunscreen, a hat, and sunglasses" : "Not a perfect day, but play ball!";
alert(hat);
console.log(hat);
}









