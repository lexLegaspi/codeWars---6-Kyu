// Given a string of numbers, you must perform a method in which you will translate this string into text, based on the below image:


// For example if you get "22" return "b", if you get "222" you will return "c". If you get "2222" return "ca".

// Further details:

// 0 is a space in the string.
// 1 is used to separate letters with the same number.
// always transform the number to the letter with the maximum value, as long as it does not have a 1 in the middle. So, "777777" -->  "sq" and "7717777" --> "qs".
// you cannot return digits.
// Given a empty string, return empty string.
// Return a lowercase string.
// Examples:
// "443355555566604466690277733099966688"  -->  "hello how are you"
// "55282"                 -->  "kata"
// "22266631339277717777"  -->  "codewars"
// "66885551555"           -->  "null"
// "833998"                -->  "text"
// "000"                   -->  "   "

// My Solution:

function phoneWords(num) {
 let keys = [
  [' '], null,
  ['a','b','c'],
  ['d','e','f'],
  ['g','h','i'],
  ['j','k','l'],
  ['m','n','o'],
  ['p','q','r','s'],
  ['t','u','v'],
  ['w','x','y','z']]
 
 let message = ''
 let count = 1

  for (let i = 0; i < num.length; i++) {

    if (num[i] === '1') {
      count = 1
      continue
    }

    if (num[i] === num[i+1]) {
      count++
    } else {

      let digit = Number(num[i])
      let letters = keys[digit]

      if (!letters) {
        count = 1
        continue
      }

      let fullCycles = Math.floor((count - 1) / letters.length)
      let remainder = (count - 1) % letters.length

      for (let c = 0; c < fullCycles; c++) {
        message += letters[letters.length - 1]
      }

      message += letters[remainder]

      count = 1
    }
  }
  return message
}
