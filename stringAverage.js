// You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

// "zero nine five two" -> "four"

// If the string is empty or includes a number greater than 9, return "n/a"

// My Solution:

function averageString(str) {
  let numbers = "zeroonetwothreefourfivesixseveneightnine";
  let map = {
    zero:   0,
    one:    1,
    two:    2,
    three:  3,
    four:   4,
    five:   5,
    six:    6,
    seven:  7,
    eight:  8,
    nine:   9,
  };
  const reverseMap = Object.fromEntries(
    Object.entries(map).map(([key, value]) => [value, key]),
  );
  if (str == "") return "n/a";

  str = str.split(" ");
  if (str.some((x) => !numbers.includes(x))) return "n/a";
  return reverseMap[
    Math.floor(str.map((x) => map[x]).reduce((a, b) => a + b, 0) / str.length)
  ];
}
