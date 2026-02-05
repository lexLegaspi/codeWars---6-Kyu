// Given a positive integer as input, return the output as a string in the following format:

// Each digit (from left to right) multiplied by the corresponding power of 10, so that the sum equals the input number.

// If the digit is zero, exclude it from the output;
// For the last digit, just use the digit itself, without *1.
// Examples
// 0     -->  ""
// 56    -->  "5*10+6"
// 60    -->  "6*10"
// 999   -->  "9*100+9*10+9"
// 10004 -->  "1*10000+4"
// Note: input >= 0

// My Solution:

function simplify(number){
//You can do this!
  
  let stringNum = String(number)
  let digit = `1` + '0'.repeat(stringNum.length - 1)
  let result = ''
  for (let i = 0; i < stringNum.length; i++) {
    let digit = `1` + '0'.repeat(stringNum.length - 1 - i)
    if(stringNum[i] > 0) {
      result += `${stringNum[i]}*${digit}+`
    }
  }
  
  return number%10 == 0?result.slice(0,-1):result.slice(0,-3)
}