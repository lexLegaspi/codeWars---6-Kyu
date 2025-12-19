// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

// My Solution:

function cleanString(s) {
  let arr = s.split('')
  let result = []
   
  arr.forEach((x, i) => {
    if(x === '#') {
      result.pop()
    }else result.push(x)
    
  })
  
 return result.join('')
}