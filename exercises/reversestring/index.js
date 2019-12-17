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
//     reversed = character + reversed
//   }
//   return reversed
// }
// new for syntax that eliminates small errors

/////////////////// SOLUTION 3 ///////////////////

// function reverse(str) {
//   return str.split('').reduce((reversed, character) => character + reversed, '')
// }

// Reduce is used to take all the different values in an [array]
// & condense them all down to 1️⃣ singular value
// So we want to take all the values within the [array] created
// & condense them down to a single 'string'

// 💎Reduce💎
// Takes 2️⃣ seperate values
// The first arg is an ➡️ fxn
// The second arg is an initial value
// When reduce 🏃🏽‍♀️:
// it's going to take the initial arg and pass it into the ➡️ fxn
// & whatever gets returned as the starting arg for every successive run of the fxn
// The fxn runs 1️⃣ time for every element in the [array]
// Within the arrow fxn:
// The first arg is what you are getting out of it (in this case the reversed 'string')
// The second is what each element in the array represents

module.exports = reverse;
