// You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

// If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

// An example should clarify:

// 'taxi' would become 'atix' 'taxis' would become 'atxsi'

// Words will be separated by exactly one space and there will be no leading or trailing spaces.

// My solution:

function insideOut(x) {
  let words = x.split(" ");
  let result = [];
  for (let word of words) {
    if (word.length < 4) {
      result.push(word);
    } else {
      if ((word.length & 1) == 0) {
        let left = "";
        let right = "";
        for (let i = 0; i < Math.floor(word.length / 2); i++) {
          right += word[i + word.length / 2];
          left += word[i];
        }
        let rightIO = right.split("").reverse().join("");
        let leftIO = left.split("").reverse().join("");
        result.push(leftIO + rightIO);
      } else {
        // odd length
        let left = "";
        let right = "";
        let middleIndex = Math.floor(word.length / 2);
        for (let i = 0; i < middleIndex; i++) {
          left += word[i];
          right += word[i + middleIndex + 1];
        }
        let leftIO = left.split("").reverse().join("");
        let rightIO = right.split("").reverse().join("");
        result.push(leftIO + word[middleIndex] + rightIO);
      }
    }
  }
  return result.join(" ");
}
