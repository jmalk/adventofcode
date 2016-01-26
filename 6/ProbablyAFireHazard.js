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
    console.log('x: ' + this.position.x + ', y: ' + this.position.y + ', on: ' + this.on);
};

var testLight = new Light(v, false);

testLight.print();

Light.prototype.turnOn = function() {
    'use strict';
    this.on = true;
};

testLight.turnOn();
console.log('Expect test light to be on, it is actually');
testLight.print();

Light.prototype.turnOff = function() {
    'use strict';
    this.on = false;
};

testLight.turnOff();
console.log('Expect test light to be off it is actually');
testLight.print();

Light.prototype.toggle = function() {
    'use strict';
    this.on = !this.on;
};

testLight.toggle();
console.log('Test light is currently');
testLight.print();
console.log('After toggling it is');
testLight.toggle();
testLight.print();
