/*
  the alternateCase function should take a string and return a string.
  Every other letter either capital or lower case, starting with a capital letter.
  
  'hello' would become 'HeLlO'
  'hello world' would become 'HeLlO wOrLd'
*/

function alternateCase(str) {
  let alternateString = '';
  let upperCase = true;

  for (let i = 0; i < str.length; i++) {
    if(/[\S]/g.test(str[i])) {
      if(upperCase) {
        alternateString += str[i].toUpperCase();
      } else {
        alternateString += str[i].toLowerCase();
      }
      upperCase = !upperCase;
    } else {
      alternateString += str[i];
    }
  }
  return alternateString;
}

module.exports = alternateCase;
