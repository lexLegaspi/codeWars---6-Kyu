// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// My Solution:

function solution(string) {
    if(!string) return ""
    if(string === string.toLowerCase()) return string
    let arrFromString = string.split('')
    let start = 0
    let end = 0
    let result = []
    for (let i=1; i<=arrFromString.length;i++){
      if(arrFromString[i - 1] === arrFromString[i - 1].toUpperCase()){
        end = i -1
        result.push(arrFromString.slice(start, end).join(''))
        start = i - 1
      }
    }
  end = arrFromString.length
  result.push(arrFromString.slice(start, end).join(''))
  return(result.join(' '))
}