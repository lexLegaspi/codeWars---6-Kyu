// Description:
// Give you a array arr that contains some numebers. Numbers can be positive,negative,integer or float. Only one of these numbers is unique. Find and return it.

// Some examples:
// findUnique([1,2,3,5,7]) === 2
// Because only 2 is an even number, the other numbers are odd.

// findUnique([2,4,6,8,9]) === 9
// Because only 9 is an odd number

// findUnique([2,-4,6,8]) === -4
// Because only -4 is a negative number

// findUnique([-2,-4,-6,8]) === 8
// Because only 8 is a positive number

// findUnique([2,4.4,6,8]) === 4.4
// Because only 4.4 is a float number

// findUnique([2.2,4.4,6.6,8]) === 8
// Because only 8 is a integer number

// findUnique([2,2,2,4]) === 4
// Because only 4 has a diffrent value
// Priority level: float/integer > positive/negative > odd/even > diffrent value

// Some edge case:

// findUnique([-2,-4,-6.6,8]) === -6.6  //not 8
// Because Priority level float/integer > positive/negative

// findUnique([-2,-4,-7, 8]) === 8  //not -7
// Because Priority level positive/negative > odd/even
// Note: All inputs will be an array. The array contains at least 3 element. Only one unique number in it. 0 will not appear, do not worry about it ;-)

// My Solution:

function findUnique(arr) {
  let unique = undefined
  let set1 = []
  let set2 = []

  function test() {
    if (set1.length === 1 && set2.length === arr.length - 1) {
      return set1[0]
    }
    if (set2.length === 1 && set1.length === arr.length - 1) {
      return set2[0]
    }
    return undefined
  }

  arr.forEach(x => {
    Number.isInteger(x) ? set1.push(x) : set2.push(x)
  })
  unique = test()
  if (unique !== undefined) return unique
  set1 = []
  set2 = []

  arr.forEach(x => {
    x < 0 ? set1.push(x) : set2.push(x)
  })
  unique = test()
  if (unique !== undefined) return unique
  set1 = []
  set2 = []

  arr.forEach(x => {
    x % 2 === 0 ? set1.push(x) : set2.push(x)
  })
  unique = test()
  if (unique !== undefined) return unique

  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n))
}