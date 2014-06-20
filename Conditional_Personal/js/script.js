/* Ryan Slagle
June 17, 2014
Conditionals Personal
 */

//Create conditionals for something personal to me.

//prompted variable that gets the user to enter hole yardage.
//If the hole is over 250 yards hit the driver...If not hit else.

var holeLength = prompt("How many yards is the hole?");
if(holeLength===""){
    holeLength = prompt("How many yards is the hole?")
}

var normalHit = prompt("How far do you hit your Wedge?");
if(normalHit===""){
    normalHit = prompt("Seriously how far?")
}

var hitDriver = (holeLength - normalHit);


//creating conditional logic based on user generated information.
if(hitDriver > 250){
    //If hitDriver var is greater than 250 than hit your driver.
    alert("With only hitting your wedge " +  normalHit + " yards you have " + hitDriver + " yards you need to get there.  Hit your driver!");
    console.log("With only hitting your wedge " +  normalHit + " yards you have " + hitDriver + " yards you need to get there.  Hit your driver!");
}else{
    //If hitDriver var is less than 250 than choose any other club of your choice.
    if(hitDriver < 250);
    //Same alert but opposite the previous
    alert("Since you hit your wedge " +  normalHit + " yards you have " + hitDriver + " yards you need to get there.  Club Down!");
    console.log("Since you hit your wedge " +  normalHit + " yards you have " + hitDriver + " yards you need to get there.  Club Down!");
}








