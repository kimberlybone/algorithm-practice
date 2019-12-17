// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  const reversedStr = str.split('')
  reversedStr.reverse()
  return reversedStr.join('')
  // return str.split('').reverse().join('')
}

// function reverse(str) {
//   let reversed = ''
//   for( let character of str ){
//     character = character + reversed
//   }
//   return reversed
// }
// new for syntax that eliminates small errors

module.exports = reverse;
