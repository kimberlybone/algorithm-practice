// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let obj = {}
  for( let char of str ){
    obj[char] = 1
    if( obj[char] ){
      debugger
      obj[char] += 1
    }
  }
  return obj
}

maxChar('asddddf')
// Turn the string into an {obj} where each letter is a key
// and the # of times it appears is the value

module.exports = maxChar;
