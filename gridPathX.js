// Given an n by n grid filled with lowercase x's and periods (.), return the minimum number of periods to be replaced with x's in order to form a continuous, straight, n-length path of x's, from either: side to side, top to bottom, or diagonally.

// Input and Output:
// Input: a string formatted as an n by n grid filled with randomly placed lowercase x's and periods. Each line of the grid is separated from the next by a linebreak.

// Output: a number between 0 and n, inclusive. The return number represents the minimum number of periods to be replaced with x's to obtain a straight n-length path of x's.

// Example:
// Input:
//   ..x..
//   .....
//   .....
//   ..x..
//   xx..x
// Output: 2
// As you can see, in the last row (xx..x) of the grid, you only need to replace two periods with x's to get a straight n-length path of x's in the grid. Any other row, column, or diagonal will require more replacements than 2. So 2 is the minimum number of periods to be replaced with x's.

// For more examples check out the Example Test Cases.

// My Solution:

function minXPath(grid) {
  let n = grid.split("\n").length;
  let map = grid.split("\n").map((row) => row.split(""));
  let max = 0;

  for (let x = 0; x < map.length; x++) {
    let current = map[x].filter((x) => x === "x").length;
    if (current > max) max = current;
    current = 0;
    for (let y = 0; y < map[x].length; y++) {
      if (map[y][x] == "x") current++;
    }
    if (current > max) max = current;
  }

  let current = 0;
  for (let i = 0; i < n; i++) {
    if (map[i][i] === "x") current++;
  }
  if (current > max) max = current;

  current = 0;
  for (let i = 0; i < n; i++) {
    if (map[i][n - 1 - i] === "x") current++;
  }
  if (current > max) max = current;
  return n - max;
}
