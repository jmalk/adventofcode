'use strict';

var fs = require('fs');

var instructions = fs.readFileSync('directions.txt', 'utf8', function(error, text) {
    if (error) {
        throw error;
    }
    return text;
});

console.log(instructions);

var currentPosition = [0, 0];

var testInstructions = "^";

var cardinalDirections = {
    "^": [ 0,  1],
    ">": [ 1,  0],
    "v": [ 0, -1],
    "<": [-1,  0]
};

console.log(currentPosition);
currentPosition[0] = currentPosition[0] + cardinalDirections[testInstructions][0];
currentPosition[1] = currentPosition[1] + cardinalDirections[testInstructions][1];
console.log(currentPosition);

var uniqueHousesVisited = [];

console.log('At least one present was delivered to', uniqueHousesVisited.length, 'different houses.');