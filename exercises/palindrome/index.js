// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   const reversedStr = str.split('').reverse().join('')
//   return str === reversedStr
// }


function palindromes(str) {
  return str.split('').every((char, i) => char === str[str.length - i - 1])
}
// every is used to do a boolean check on every element in an array
// when the every fxn runs it checks to see if the return value of every
// if any fxn returns false then the overall fxn will return false and vice versa
module.exports = palindrome;
