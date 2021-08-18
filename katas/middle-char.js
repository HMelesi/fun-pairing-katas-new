/*
  The function getMiddleChar should return the middle character of a string. If the string is of even length, return the middle two characters.
  It should ignore any whitespace and special characters.
  E.g.
  'hello world!!' should return 'ow'
*/

function getMiddleChar(str) {
  const charString = str.replace(/[^a-zA-Z0-9]/g, '');
  
  const index = Math.floor(charString.length/2);


  if(charString.length % 2 === 0) {
    return charString.slice(index - 1, index + 1)
  }
  return charString[index];
}

module.exports = getMiddleChar;
