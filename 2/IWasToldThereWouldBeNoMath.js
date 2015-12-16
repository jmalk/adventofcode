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
var matrixOfPresentDimensions = arrayOfPresentDimensions.map(function (string) {
    return string.split('x');
});

// 2*l*w + 2*w*h + 2*h*l
function surfaceAreaOfBox(box) {
    return 2 * ( box[0] * box[1] + box[1] * box[2] + box[2] * box[0] );
}

// PLUS shortest side * second shortest side
function areaOfSmallestFace(box) {
    var smallestEdge = box.sort(function(a, b) { return a - b; })[0];
    var secondSmallestEdge = box.sort(function(a, b) { return a - b; })[1];
    return smallestEdge * secondSmallestEdge;
}

// For each present:
function squareFeetForPresent(box) {
    return surfaceAreaOfBox(box) + areaOfSmallestFace(box);
}

var paperRequired = matrixOfPresentDimensions.map(squareFeetForPresent)
                                                 .reduce(function (a, b) { return a + b; });

console.log('Paper required', paperRequired);

/*** Part Two ***/

// Perimeter of smallest face
function perimeterOfSmallestFace(box) {
    var smallestEdge = box.sort(function(a, b) { return a - b; })[0];
    var secondSmallestEdge = box.sort(function(a, b) { return a - b; })[1];
    return 2 * smallestEdge + 2 * secondSmallestEdge;
}

// Volume of present
function volume(box) {
    return box[0] * box[1] * box[2];
}

function feetOfRibbonForPresent(box) {
    return perimeterOfSmallestFace(box) + volume(box);
}

// Ribbon required
var ribbonRequired = matrixOfPresentDimensions.map(feetOfRibbonForPresent)
                                              .reduce(function (a, b) { return a + b; });

console.log('Ribbon required', ribbonRequired);
