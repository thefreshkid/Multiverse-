const Traveller = require('../Traveller')
const Bag = require('../Bag')

describe('defines a suite of tests for the Traveller class', function () { 

    test('add bag', function () {
        // given
        const yemibag = new Bag(13);
        const yemi = new Traveller('yemi');
        yemi.addBag(yemibag)
        // then
        expect(yemi.bag).toContain(yemibag);
    });

});