describe('Interpretation of instrutions given to Santa', function() {
    'use strict';

    it('Should tell us Santa is on the ground floor if santa has no instructions', function() {

        var instructions = '';
        var floorSantaIsOn = whatFloorIsSantaOn(instructions);
        
        expect(floorSantaIsOn).toBe(0);

    });

});

