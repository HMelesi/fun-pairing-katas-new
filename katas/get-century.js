/*
  The function getCentury should take a year as a number and return the century.
  E.g. 1999 should return '20th'
  2004 should return '21st'
  1877 should return '19th'
  It should work up to and including the year 10,000 (the '101st' century)
*/

function getCentury(num) {
  const century = Math.ceil((num + 1) / 100 );
  const centuryString = century.toString();

  let suffix = '';

  if(centuryString[centuryString.length - 1] === '1' 
  && centuryString[centuryString.length - 2] !== '1') {
    suffix = 'st'
  } else if(centuryString[centuryString.length - 1] === '2'
  && centuryString[centuryString.length - 2] !== '1') {
    suffix = 'nd';
  } else if(centuryString[centuryString.length - 1] === '3'
  && centuryString[centuryString.length - 2] !== '1') {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }

  return `${century}${suffix}`;
}

module.exports = getCentury;
