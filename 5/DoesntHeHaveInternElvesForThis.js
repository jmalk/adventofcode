'use strict';
var fs = require('fs');

var strings = fs.readFileSync('strings.txt', 'utf8', function(error, text) {
    if (error) {
        throw error;
    }
    return text;
});

strings = strings.split('\n');

function isNice(string) {
    return containsThreeVowels(string) &&
           containsDoubleLetter(string) &&
           !containsBannedSubstring(string);
}

function containsThreeVowels(string) {
    return /(.*(a|e|i|o|u).*){3,}/.test(string);
}

function containsDoubleLetter(string) {
    var characters = string.split('');

    for (var i = 1; i < characters.length; i++) {
        var charIsLetter = /[A-Za-z]/.test(characters[i]);
        var charSameAsPrevious = (characters[i] === characters[i - 1]);
        if (charIsLetter && charSameAsPrevious) {
            return true;
        }
    }

    return false;
}

function containsBannedSubstring(string) {
    return /(ab|cd|pq|xy)/.test(string);
}

var numberOfNiceStrings = 0;

strings.forEach(function(string) {
    if (isNice(string)) {
        numberOfNiceStrings +=1;
    }
});

console.log('There were', numberOfNiceStrings, 'nice strings.');
