'use strict';

var fs = require('fs');

var instructions = fs.readFileSync('directions.txt', 'utf8', function(error, text) {
    if (error) {
        throw error;
    }
    return text;
});

var arrayOfInstructions = instructions.split('');

var startingPosition = [0, 0];

var housesVisited = [startingPosition];
var uniqueHousesVisited = 1;

var cardinalDirections = {
    "^": [ 0,  1],
    ">": [ 1,  0],
    "v": [ 0, -1],
    "<": [-1,  0]
};

function areEqual(arrA, arrB) {
    return arrA[0] === arrB[0] && arrA[1] === arrB[1];
}

function arrayContainsVector(arr, vec) {
    var contains = false;

    for (var i = 0; i < arr.length; i++) {
        if (areEqual(arr[i], vec)) {
            contains = true;
        }
    }

    return contains;
}

arrayOfInstructions.forEach(updateHousesVisitedAndUnique);

function updateHousesVisitedAndUnique(direction) {
    var newLocation = [];
    newLocation[0] = housesVisited[housesVisited.length - 1][0] +
                     cardinalDirections[direction][0];
    newLocation[1] = housesVisited[housesVisited.length - 1][1] +
                     cardinalDirections[direction][1];

    if (!arrayContainsVector(housesVisited, newLocation)) {
        uniqueHousesVisited += 1;
    }

    housesVisited.push(newLocation);
}

console.log(housesVisited);

console.log('', housesVisited.length, 'presents were delivered.');

console.log('At least one present was delivered to', uniqueHousesVisited, 'different houses.');