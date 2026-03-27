// Given a string, output the encoded version of that string.

// Example:
// Input:
// 'When nobody is around, the trees gossip about the people who have walked under them.'
// First, the input is normalized; Any character other than alphabetic characters should be removed from the text and the message is converted into lowercase. Only English alphabets (upper and lower case) and valid non-alphabetic characters will be passed i.e.,:

// !"#$%&'()*+, -./:;<=>?@[\]^_`{|}~
// No digits will be passed as input

// The input is normalized into:
// 'whennobodyisaroundthetreesgossipaboutthepeoplewhohavewalkedunderthem'
// The text is then organized into a rectangle of size (a * b) such that b >= a and b - a <= 1. The last row, if incomplete, should be padded with spaces. Since the length of the normalized text is 68, we use an 8*9 rectangle giving;

// 'whennobod'
// 'yisaround'
// 'thetreesg'
// 'ossipabou'
// 'tthepeopl'
// 'ewhohavew'
// 'alkedunde'
// 'rthem    '
// The final message is obtained by reading the rectangle down each column from left to right, and separated into b chunks of length a, separated by spaces. No characters other than lowercase English alphabets and spaces are to be used in the output.

// Output:
// 'wytotear hihstwlt eseshhkh natieoee nrrpphdm ooeaeau  buebovn  onsoped  ddgulwe ' 

// my Solution:


function cipherText(plainText) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  plainText = plainText.toLowerCase().split('').filter(x => alphabet.includes(x))
  if (plainText.length == 0) return ''
  console.log(plainText)
  
  let a = 1
  let b = 1
  
  while (a * b < plainText.length) {
    b++
    if (a * b < plainText.length) {
      a++
    }
  }
  
  let result = []
  
  for (let i = 0; i < a; i++) {
    let arr = new Array(b).fill(' ')
    for (let j = 0; j < b; j++) {
      let char = plainText.shift()
      if (char) {
        arr[j] = char
      }
    }
    result.push(arr)
  }
  
  let final = ''
  
  for (let i = 0; i < b; i++) {
    for (let j = 0; j < a; j++) {
      final += result[j][i]
      }
    final += ' '
    }
  
  return final.slice(0, -1)
}