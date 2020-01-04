// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

////// 1ST SOLUTION //////
function chunk(array, size) {
  const chunked = []
  // chunked = create a new array to hold chunks
  for( let element of array ){
    const lastElem = chunked[chunked.length - 1]

    if (!lastElem || chunked.length === size){
      chunked.push([element])
    } else {
    lastElem.push(element)
    }
  }
  return chunked
}
// NOTES //
// take the second argument (the size) and
// loop through the array to make a new array insid of the existing array
// the new array

////// 2ND SOLUTION //////

module.exports = chunk;
