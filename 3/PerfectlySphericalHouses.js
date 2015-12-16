'use strict';

var fs = require('fs');

var instructions = fs.readFileSync('directions.txt', 'utf8', function(error, text) {
    if (error) {
        throw error;
    }
    return text;
});

console.log(instructions);

var cardinalDirections = {
    "^": [ 0,  1],
    ">": [ 1,  0],
    "v": [ 0, -1],
    "<": [-1,  0]
};

var uniqueHousesVisited = [];

console.log('At least one present was delivered to', uniqueHousesVisited.length, 'different houses.');