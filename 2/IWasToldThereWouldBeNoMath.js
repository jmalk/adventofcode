'use strict';
// Read the data from the file
var fs = require('fs');

var presentDimensions = fs.readFileSync('presentDimensions', 'utf8', function(error, text) {
    if (error) {
        throw error;
    }
    return text;
});

// Divide the data into array, each element is one present
var arrayOfPresentDimensions = presentDimensions.split('\n');

// Divide each element into array of its three dimensions
function splitOnx (string) {
    return string.split('x');
}

var matrixOfPresentDimensions = arrayOfPresentDimensions.map(splitOnx);

// 2*l*w + 2*w*h + 2*h*l
function surfaceAreaOfBox(arrayOfDimensions) {
    var box = arrayOfDimensions;
    return 2 * ( box[0] * box[1] + box[1] * box[2] + box[2] * box[0] );
}

// PLUS shortest side * second shortest side
function areaOfSmallestSide(arrayOfDimensions) {
    var box = arrayOfDimensions;
    var smallestSide = box.sort(function(a, b) { return a - b; })[0];
    var secondSmallestSide = box.sort(function(a, b) { return a - b; })[1];
    return smallestSide * secondSmallestSide;
}

// For each present:
function squareFeetForPresent(arrayOfDimensions) {
    var box = arrayOfDimensions;
    return surfaceAreaOfBox(box) + areaOfSmallestSide(box);
}

var paperRequired = matrixOfPresentDimensions.map(squareFeetForPresent)
                                                 .reduce(function (a, b) { return a + b; });

console.log(paperRequired);