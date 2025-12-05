// Given any number of arrays each sorted in ascending order, find the nth smallest number of all their elements.

// All the arguments except the last will be arrays, the last argument is n.

// nthSmallest([1,5], [2], [4,8,9], 4) // returns 5 because it's the 4th smallest value
// Be mindful of performance.

// My solution:
function nthSmallest() {
  // Good luck!
  let temp = Array.from(arguments)
  let result = temp.slice(0,-1).reduce((a,b) => {
    return a.concat(b).sort((a,b) => a -b)
  })
  return result[temp.pop() - 1]
}