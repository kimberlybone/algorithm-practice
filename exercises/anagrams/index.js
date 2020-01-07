// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams( stringA, stringB ) {
  const charMapA = buildCharMap( stringA )
  const charMapB = buildCharMap( stringB )

  if( Object.keys( charMapA ).length !== Object.keys( charMapB ).length ){
    return false
  }

  for( let char in charMapA ){
    if( charMapA[char] !== charMapB[char] ){
      return false
    }
  }
  return true
}

function buildCharMap( str ) {
  const charMap = {}
  for (let char of str.replace(/[^\w]/g, "").toLowerCase()){
    charMap[char] = charMap[char] + 1 || 1
  }
  return charMap
}
// --- NOTES
// use REGEX
// build helper fxn
// Ex: const word = "HI THERE!!"
// can remove all the extra characters
//  -> word.replace(/[^\w]/g, "")
// This results to "HITHERE"
// Then we want to work with lowercase
// so will have to use .toLowerCase() method
// This replaces any spaces and exclamation marks that are found w an empty string
// make a hash so can loop through each character of stringA and stringB
// while looping, make a hash with the character as the key and the number of that character as the value
//

module.exports = anagrams;
