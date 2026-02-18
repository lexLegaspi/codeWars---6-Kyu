// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are: 2332, 110011, 54322345

// For a given number num, write a function which returns an array of all the numerical palindromes contained within each number. The array should be sorted in ascending order and any duplicates should be removed.

// In this kata, single digit numbers and numbers which start or end with zeros (such as 010 and 00) are NOT considered valid numerical palindromes.

// If num contains no valid palindromes, return "No palindromes found". Otherwise, return "Not valid" if the input is not an integer or is less than 0.

// Examples
// 1221      -->  [22, 1221]
// 34322122  -->  [22, 212, 343, 22122]
// 1001331   -->  [33, 1001, 1331]
// 1294      -->  "No palindromes found"
// "1221"    -->  "Not valid"

// My Solution:

function palindrome(num){ 
  let result = []

  if (!Number.isInteger(num) || num < 0) return "Not valid"
  if (num < 10) return "No palindromes found"

  let arr = num.toString().split('')

  for (let i = 0; i < arr.length; i++){
    for (let j = i + 1; j <= arr.length; j++){

      let sub = arr.slice(i, j).join('')

      if (
        sub.length > 1 &&
        sub[0] !== '0' &&
        sub === sub.split('').reverse().join('') &&
        !result.includes(+sub)
      ){
        result.push(+sub)
      }
    }
  }

  return result.length ? result.sort((a,b) => a-b) : 'No palindromes found'
}