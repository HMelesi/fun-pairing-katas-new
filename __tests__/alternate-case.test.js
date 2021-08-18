const alternateCase = require('../katas/alternate-case');

describe('alternateCase', () => {
    test('returns a string', () => {
        expect(typeof alternateCase('hello world')).toBe('string');
    });
    test('when passed a single word returns in the correct format', () => {
        expect(alternateCase('hello')).toBe('HeLlO');
    });
    test('when passed a string of more than one word returns in the correct format', () => {
        expect(alternateCase('hello world')).toBe('HeLlO wOrLd');
    });
});