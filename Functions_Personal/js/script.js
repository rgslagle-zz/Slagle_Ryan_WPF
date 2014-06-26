/*
Ryan Slagle
June 25 2014
Functions Personal
 */

//create variable to determine time of travel for a given distance
var speed = prompt("How fast will you be driving in MPH?");

//validate
while (isNaN(speed)|| speed==="") {
    speed = prompt("Your speed of travel is needed in order to\ndetermine trip time.\nPlease enter how fast you will be traveling in MPH");
}

//data from user
var distance = prompt("How many miles are you going?");

//validate
while (isNaN(distance)|| distance==="") {
    distance = prompt("Your speed of travel is needed in order to\ndetermine trip time.\nPlease enter how fast you will be traveling in MPH");
}
//Anonymous Function
var driveTime = function(distance, speed){
    var travel = distance/speed * 60;
    return(travel);
}
//Invoking the function after the defining it.
var drive = driveTime(distance, speed);
console.log(drive);
//creating an alert for the user.
alert("Your drive time will be " + Number(drive)+ " minutes");