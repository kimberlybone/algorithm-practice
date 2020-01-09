// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let words = []
  let splitStr = str.split(' ')
  for( let word of splitStr ){
    let newStr = word.toUpperCase()
    words.push( newStr )
  }
  return words.join('')
}
// --- NOTES
// Make empty array 'words'
// Split the input str by spaces to get an array
// For each word in the array
// Uppercase the first letter of word
// Join 1st letter w rest of the str
// Push result into 'words' array
// Join 'words' into a str and return it

module.exports = capitalize;
