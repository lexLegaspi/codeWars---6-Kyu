// Aoccdrnig to a rscheearch at Cmabrigde Uinervtisy, it deosn't mttaer in waht oredr the ltteers in a wrod are, the olny iprmoetnt tihng is taht the frist and lsat ltteer be at the rghit pclae. The rset can be a toatl mses and you can sitll raed it wouthit porbelm. Tihs is bcuseae the huamn mnid deos not raed ervey lteter by istlef, but the wrod as a wlohe.

// Interesting article about this.

// Task:
// Write a function which mix inner characters in each word,first and last character stays untouched.Notice that punctuation mark is not a part of a word!By word we define only alphanumeric characters.
// Requirements:
// -at least 10% of all changeable words must differ from original.
// If you solve this kata,check how many percent of changeable words you have changed.If you reach 100% you will get a reward!

// My Solution:

function jumble(string) {
  let result = "";
  let word = "";

  function isAlphaNumeric(char) {
    let code = char.charCodeAt(0);
    return (
      (code >= 48 && code <= 57) || // 0-9
      (code >= 65 && code <= 90) || // A-Z
      (code >= 97 && code <= 122)   // a-z
    );
  }

  function shuffleMiddle(w) {
    if (w.length <= 3) return w;

    let first = w[0];
    let last = w[w.length - 1];
    let middle = w.slice(1, -1).split("");

    for (let i = middle.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = middle[i];
      middle[i] = middle[j];
      middle[j] = temp;
    }

    return first + middle.join("") + last;
  }

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (isAlphaNumeric(char)) {
      word += char;
    } else {
      result += shuffleMiddle(word);
      word = "";

      result += char;
    }
  }

  result += shuffleMiddle(word);

  return result;
}