// Sentence Calculator
// Calculate the total score (sum of the individual character scores) of a sentence given the following score rules for each allowed group of characters:

// Lower case [a-z]: 'a'=1, 'b'=2, 'c'=3, ..., 'z'=26
// Upper case [A-Z]: 'A'=2, 'B'=4, 'C'=6, ..., 'Z'=52
// Digits [0-9] their numeric value: '0'=0, '1'=1, '2'=2, ..., '9'=9
// Other characters: 0 value
// Note: input will always be a string

// My Solution:

function lettersToNumbers(s) {
  // your code......
  let result = 0
  
  for (let i of s) {
    if(!(/^[a-zA-Z0-9]$/.test(i))) {
      result += 0
  } else if (i >= '0' && i <= '9'){
      result += Number(i)
  } else if (i === i.toLowerCase()) {
      result += i.charCodeAt(0) - 96
  } else if(i === i.toUpperCase()) {
       result += 2 * (i.charCodeAt(0) - 64)
    } 
  }
  
  return result
}