// Complete the solution so that it splits the string into strings of two characters in a list/array (depending on the language you use). If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// My Solution:

function solution(str){
   let arr = str.split('')
   let result = []
   
   for (let i=0;i<arr.length;i+=2){
     result.push(arr[i]+(arr[i+1] || '_'))
   }

  return result
}