var fs = require('fs');

var strings = fs.readFileSync('strings.txt', 'utf8', function(error, text) {
    if (error) {
        throw error;
    }
    return text;
});

console.log(strings);