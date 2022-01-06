const Bag = require('../Bag')


describe('defines a suite of tests for the Bag class', function () { 

    test('has correct weight', function () {
        // given
        const yemiBag = new Bag(13);

        // then
        expect(yemiBag.weight).toBe(13);
    });

});