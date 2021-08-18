const getCentury = require('../katas/get-century');

describe('getCentury', () => {
    test('when input a number it should return a string', () => {
        expect(typeof getCentury(1999)).toBe('string')
    });
    test('when input a number in 1st century it should return the correct result', () => {
        expect(getCentury(85)).toBe('1st');
        expect(getCentury(5)).toBe('1st');
    });
    test('when input a number in 2nd century it should return the correct result', () => {
        expect(getCentury(101)).toBe('2nd');
        expect(getCentury(199)).toBe('2nd');
    });
    test('when input a number in 3rd century it should return the correct result', () => {
        expect(getCentury(201)).toBe('3rd');
        expect(getCentury(299)).toBe('3rd');
    });
    test('when input a number in 4th century it should return the correct result', () => {
        expect(getCentury(301)).toBe('4th');
        expect(getCentury(399)).toBe('4th');
    });
    test('when input a number in centuries 10th - 20th it should return the correct result', () => {
        expect(getCentury(901)).toBe('10th');
        expect(getCentury(1001)).toBe('11th');
        expect(getCentury(1101)).toBe('12th');
        expect(getCentury(1201)).toBe('13th');
        expect(getCentury(1301)).toBe('14th');
        expect(getCentury(1401)).toBe('15th');
        expect(getCentury(1501)).toBe('16th');
        expect(getCentury(1601)).toBe('17th');
        expect(getCentury(1701)).toBe('18th');
        expect(getCentury(1801)).toBe('19th');
        expect(getCentury(1901)).toBe('20th');
    });
    test('when input a number in centuries 21st+ it should return the correct result', () => {
        expect(getCentury(2001)).toBe('21st');
        expect(getCentury(2101)).toBe('22nd');
        expect(getCentury(2201)).toBe('23rd');
        expect(getCentury(10000)).toBe('101st');
    });
});
