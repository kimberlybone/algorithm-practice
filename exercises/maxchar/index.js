// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let obj = {}
  for( let char of str ){
    debugger
    obj[char] = 1
  }
}

maxChar('asddddf')
// Turn the string into an {obj} where each letter is a key
// and the # of times it appears is the value

module.exports = maxChar;
