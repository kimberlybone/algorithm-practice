// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz


/////// SOLUTION 1 ///////

function fizzBuzz(n) {
  for( let i = 1; i < n; i++ ){
    if( i % 3 === 3 ){
      console.log("fizz")
    } else if ( i % 5 === 5 ) {
      console.log("buzz")
    } else if ( i % 3 === 3 && i % 5 === 5 ) {
      console.log("fizzbuzz")
    }
  }
}
// This fxn is going to *loop* (for loop) through every num between 1 and n to check:
// if it is divisible by 3
//  & if it is, it will return "fizz"
// if it is divisble by 5
//  & it will return "buzz"
// if it is divisible by 3 && 5
//  & it will return "fizzbuzz"

/////// SOLUTION 2 ///////

module.exports = fizzBuzz;
