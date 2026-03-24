// You are given a string and a transformation pattern (an array of operations). Your task is to apply the operations in order to the string and return the final result.

// Each operation in the pattern is one of:

// "U" → convert the string to uppercase

// "L" → convert the string to lowercase

// "R" → reverse the string

// "D" → duplicate each character (e.g., "abc" → "aabbcc", "qqbbcc" → "qqqqbbbbcccc")

// stringTransformation("abcd", ["U","R"]) // "DCBA"
// // "abcd" → "ABCD" → "DCBA"

// stringTransformation("abc", ["D","L"])  // "aabbcc"
// // "abc" → "aabbcc" → "aabbcc" (lowercase already applied)

// stringTransformation("AbCd", ["L","R"]) // "dcba"
// // "AbCd" → "abcd" → "dcba"
// Note:

// Input string length is 1 <= n <= 10^5, length of transformations is 0 <= n <= 10^5, in all tests is guaranteed that the string will be not longer than 10^8.

// My Solution:

function stringTransformation(string, transformations) {
  // Good luck :)
  string = string.split("");
  let lastCase = null;
  let reverseCount = 0;
  let dupCount = 0;

  for (let i = 0; i < transformations.length; i++) {
    if (transformations[i] == "U" || transformations[i] == "L") {
      lastCase = transformations[i];
    } else if (transformations[i] == "R") {
      reverseCount++;
    } else if (transformations[i] == "D") {
      dupCount++;
    }
  }

  let isReversed = reverseCount % 2 !== 0;
  let repeat = Math.pow(2, dupCount);

  if (lastCase == "U") {
    string = string.map((x) => x.toUpperCase());
  }

  if (lastCase == "L") {
    string = string.map((x) => x.toLowerCase());
  }

  if (isReversed) {
    string = string.reverse();
  }

  if (dupCount > 0) {
    string = string.map((x) => x.repeat(repeat));
  }

  return string.join("");
}
