// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let max = 0
  let maxChar = ''
  let obj = {}

  for( let char of str ){
    !obj[char] ? obj[char] = 1 : obj[char] ++
  }

  for( let char in obj ){
    if( obj[char] > max ){
      max = obj[char]
      maxChar = char
    }
  }

  return maxChar

}

// function maxChar(str) {
//   let obj = {}
//   chars[char] = chars[char] + 1 || 1
//   return obj
// }

// Turn the string into an {obj} where each letter is a key
// and the # of times it appears is the value

module.exports = maxChar;
