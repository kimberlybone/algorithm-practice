// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/////////////////// SOLUTION 1 ///////////////////

function reverse(str) {
  const reversedStr = str.split('')
  reversedStr.reverse()
  return reversedStr.join('')
  // return str.split('').reverse().join('')
}

/////////////////// SOLUTION 2 ///////////////////

// function reverse(str) {
//   let reversed = ''
//   for( let character of str ){
//     character = character + reversed
//   }
//   return reversed
// }
// new for syntax that eliminates small errors

/////////////////// SOLUTION 3 ///////////////////

function reverse(str) {
  str.split('').reduce()
}
// Reduce is used to take all the different values in an array
// & condense them all down to 1 singular value
// So we want to take all the values within the array created
// & condense them down to a single string

// 💎Reduce💎
// Takes 2 seperate values
// The first is an ➡️ function

module.exports = reverse;
