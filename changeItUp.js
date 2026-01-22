// Create a function that takes a string as a parameter and does the following, in this order:

// Replaces every letter with the letter following it in the alphabet (see note below)
// Makes any vowels capital
// Makes any consonants lower case
// Note:

// the alphabet should wrap around, so Z becomes A
// in this kata, y isn't considered as a vowel.
// So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)

// My Solution:

function changer(str) { 
  let vowel = 'aeiouAEIOU'
  return str.split('').map(x => {
    
    if(isNaN(x)) {
      if(x === 'z' || x==='Z'){
        x = String.fromCharCode(65)
      }else{
        x = String.fromCharCode(x.charCodeAt(0) + 1)
      }
      
      if(vowel.includes(x)){
        x = x.toUpperCase()
      }else{
        x = x.toLowerCase()
      }
      
    }
    return x
  }).join("")
}