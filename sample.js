
//this is where you design your functions
function ValidateDistance(distance){
    //check if it's an actual number
}

//utility
function RanDistance(distance, totalDistance){
    //pass in a disatance to add the amount of ran distance

    //return a total amount of distance I ran
    //add whatever I ran, to the total of distance ran thus far
    return distance + totalDistance;
}

function DisplayRunningResults(totalDistance){
    //just shows what the running results
}

//this is where you simulate your sequences of functions

//validate the the number for the distance to see if it's a valid number to use for tracking
//add the distance number to sum up a total distance

/*
someone runs
puts 100m
puts 100m
puts 300m
puts 100m
display
shows 300m
*/

let runDistance = 100;
let totalDistance = 0;
ValidateDistance(runDistance);
totalDistance = RanDistance(runDistance, totalDistance);
totalDistance = RanDistance(runDistance, totalDistance);
totalDistance = RanDistance(runDistance, totalDistance);
runDistance = 300;
totalDistance = RanDistance(runDistance);
runDistance = 100;
totalDistance = RanDistance(runDistance);
DisplayRunningResults(totalDistance);

