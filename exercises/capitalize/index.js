// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

////// SOLUTION 1 //////
function capitalize(str) {
  const words = []

  for( let word of str.split(' ') ){
    let newStr = word[0].toUpperCase() + word.slice(1)
    words.push( newStr )
  }
  return words.join(' ')
}
// --- NOTES
// Make empty array 'words'
// Split the input str by spaces to get an array
// For each word in the array
// Uppercase the first letter of word
// Join 1st letter w rest of the str
// Push result into 'words' array
// Join 'words' into a str and return it

////// SOLUTION 2 //////

module.exports = capitalize;
