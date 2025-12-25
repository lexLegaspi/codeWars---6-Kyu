// Find the longest substring in alphabetical order.

// Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

// There are tests with strings up to 10 000 characters long so your code will need to be efficient.

// The input will only consist of lowercase characters and will be at least one letter long.

// If there are multiple solutions, return the one that appears first.

// Good luck :)

// My Solution:

function longest(str) {
  // Good luck :)
  let current = str[0]
  let arr = []
  
  for(let i =0; i<str.length;i++){
    if(str[i] <= str[i + 1]) {
      current += str[i + 1]
    }else{
      arr.push(current)
      current = str[i + 1]
    }
      
    
  }
  return arr.sort((a, b) => b.length - a.length)[0]
}