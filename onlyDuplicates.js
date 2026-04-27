// Given a string, remove any characters that are unique from the string.

// Example:

// input: "abccdefee"

// output: "cceee"

// My Solution:

function onlyDuplicates(str) {
  let counts = {};

  for (let char of str) {
    counts[char] = (counts[char] || 0) + 1;
  }

  return str
    .split('')
    .filter(char => counts[char] > 1)
    .join('');
}