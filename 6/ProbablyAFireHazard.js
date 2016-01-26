function Vector(x, y) {
    'use strict';
    this.x = x;
    this.y = y;
}

function Light(vector, isOn) {
    'use strict';
    this.position = vector;
    this.on = isOn;
}

Light.prototype.print = function() {
    'use strict';
    console.log('x: ' + this.position.x + ', y: ' + this.position.y + ', on: ' + this.on);
};

Light.prototype.turnOn = function() {
    'use strict';
    this.on = true;
};

Light.prototype.turnOff = function() {
    'use strict';
    this.on = false;
};

Light.prototype.toggle = function() {
    'use strict';
    this.on = !this.on;
};
