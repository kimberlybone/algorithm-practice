// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const string1 = stringA.replace(/[^\w]/g, "").toLowerCase()
  const string2 = stringB.replace(/[^\w]/g, "").toLowerCase()
  string1 === string2 ? true : false 
}
// --- NOTES
// use REGEX
// Ex: const word = "HI THERE!!"
// can remove all the extra characters
//  -> word.replace(/[^\w]/g, "")
// This results to "HITHERE"
// Then we want to work with lowercase
// so will have to use .toLowerCase() method
// This replaces any spaces and exclamation marks that are found w an empty string
// go through each character of stringA and stringB
//

module.exports = anagrams;
