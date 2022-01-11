const Customer = require('./Customer')

describe('defines a suite of tests for the Customer class', function () { 

    test('has correct age', function () {
        // given
        const customer age = new Customer(18);

        // then
        expect(customer.age).toBe(18);
    });
}
