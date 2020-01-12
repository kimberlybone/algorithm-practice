// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

////// SOLUTION 1 //////
function steps(n) {
  for( let row = 0; row < n; row++ ){
    let stair = ''

    for( let column = 0; column < n; column++ ){
      column <= row ? stair += '#' : stair += ' '
    }

    console.log(stair)
  }
}
// --- NOTES
// From 0 to n
// Create an empty string
// From 0 to n
// If the current column is <= the current row
// Add a # to the empty string
// else
// add a space to the empty string
// console log the resulting string

////// SOLUTION 2 //////

module.exports = steps;
