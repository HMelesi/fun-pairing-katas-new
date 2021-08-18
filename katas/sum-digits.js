/*
  The function sumDigits should take a number (not necessarily an integer) and return the total of its digits.
  E.g.
  sumDigits(99)
    --> 18
  sumDigits(10.5)
    --> 6
*/

function sumDigits(num) {
  const digitsArray = num.toString().split('').filter(char => /[0-9]/g.test(char));
  const total = digitsArray.reduce((a, b) => Number.parseInt(a) + Number.parseInt(b), 0);
  return total;
}

module.exports = sumDigits;
