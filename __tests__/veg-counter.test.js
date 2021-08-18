const countVeg = require('../katas/veg-counter');

describe('countVeg', () => {
    test('should return a number', () => {
        expect(typeof countVeg([], 'brassica')).toBe('number');
    });
    test('when passed an empty array and string it should return 0', () => {
        expect(countVeg([], 'brassica')).toBe(0);
    });
    test('when passed an array of length 1 and matching string it should return 4', () => {
        expect(countVeg(
            [{name: 'Parsnip', type: 'root', quantity: 4}],
            'root'
        )).toBe(4);
    });
    test('when passed an array of length 1 and non-matching string it should return 0', () => {
        expect(countVeg(
            [{name: 'Parsnip', type: 'root', quantity: 4}],
            'brassica'
        )).toBe(0);
    });
    test('when passed an array of length greater than 1 and string it should return the number of matches', () => {
        expect(countVeg([
            {name: 'Parsnip', type: 'root', quantity: 4},
            {name: 'Broccoli', type: 'brassica', quantity: 1},
            {name: 'Carrot', type: 'root', quantity: 5},
            {name: 'Onion', type: 'bulb', quantity: 3},
            {name: 'Chard', type: 'leaf', quantity: 3},
            {name: 'Runner beans', type: 'legume', quantity: 8}
          ], 'root')).toBe(9);
    });
})