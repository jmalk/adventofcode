function whatFloorIsSantaOn(instructions) {
    'use strict';

    var instructionsArray = instructions.split('');

    var sumOfInstructions = instructionsArray.map(function(character) {
    if (character === '(') {
        return 1;
    } else if (character === ')') {
        return -1;
    } else {
        return 0;
    }
    }).reduce(function(prev, next) {
        return prev + next;
    }, 0);

    return sumOfInstructions;
}
