const areOrdered = require('../katas/are-ordered');

describe('areOrdered', () => {
    test('when passed an empty array returns false',  () => {
        expect(areOrdered([])).toBe(false);
    });
    test('when passed an array of length 1 returns true',  () => {
        expect(areOrdered([1])).toBe(true);
    });
    test('when passed an ordered array of length 2 returns true',  () => {
        expect(areOrdered([1,2])).toBe(true);
    });
    test('when passed an un-ordered array of length 2 returns false',  () => {
        expect(areOrdered([2,1])).toBe(false);
    });
    test('when passed an array of length 3 returns the correct result',  () => {
        expect(areOrdered([1,2,3])).toBe(true);
        expect(areOrdered([3,2,1])).toBe(false);
        expect(areOrdered([2,3,1])).toBe(false);
    });
})