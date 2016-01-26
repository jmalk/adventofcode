function Vector(x, y) {
    'use strict';
    this.x = x;
    this.y = y;
}

var v = new Vector(3, 5);

console.log('Expect x to be 3, actually it is', v.x);
console.log('Expect y to be 5, actually it is', v.y);

function Light(vector, isOn) {
    'use strict';
    this.position = vector;
    this.on = isOn;
}

Light.prototype.print = function() {
    'use strict';
    console.log('x: ' + this.position.x + ', y: ' + this.position.y + ', on: ' + this.isOn);
};

var testLight = new Light(v, false);

testLight.print();
