// A "Lucky Seven" is the number seven surrounded by numbers that add up to form a perfect cube. The surrounding numbers will be described as the numbers directly above, below, and next to (not diagonally) the number 7. You will be given a 2D array containing at least 1 lucky seven. Your function should return the number of lucky sevens in the array.

// Here are some "Lucky Sevens" for example:

// [ [ 'x', 513, 'x', 'x', 'x' ],
//   [ 82,   7,  32,  'x', 'x' ],
//   [ 'x', 102, 'x', 'x', 'x' ],
//   [ 'x', 'x', 'x', 'x', 'x' ],
//   [ 'x', 'x', 'x', 'x', 'x' ] ]
  
// [ [ 'x', 'x', 'x', 'x', 'x' ],
//   [ 'x', 'x', 'x', 'x', 'x' ],
//   [ 'x', 'x', 'x', 'x', 'x' ],
//   [ 'x', 'x', 'x', 'x',  9  ],
//   [ 'x', 'x', 'x', 55,   7  ] ]
  
// [ [ 'x', 'x', 'x', 'x', 'x' ],
//   [ 'x',  1,  'x', 'x', 'x' ],
//   [  0,   7,   0,  'x', 'x' ],
//   [ 'x',  0,  'x', 'x', 'x' ],
//   [ 'x', 'x', 'x', 'x', 'x' ] ]

//   My Solution:

function luckySevens(arr) {
  let value=0
  let count=0
  for (let x=0;x<arr.length;x++){
    for(let y=0;y<arr[x].length;y++) {
      if(arr[x][y] == 7) {
//         value = (arr[x - 1]?.[y] ?? 0) + (arr[x + 1]?.[y] ?? 0) + (arr[x]?.[y - 1] ?? 0) + (arr[x]?.[y + 1] ?? 0)
        value =
                (arr[x - 1] && arr[x - 1][y] !== undefined ? arr[x - 1][y] : 0) +
                (arr[x + 1] && arr[x + 1][y] !== undefined ? arr[x + 1][y] : 0) +
                (arr[x] && arr[x][y - 1] !== undefined ? arr[x][y - 1] : 0) +
                (arr[x] && arr[x][y + 1] !== undefined ? arr[x][y + 1] : 0)

        
        let cuberoot = Math.cbrt(value)
        if(Number.isInteger(cuberoot)&& value !== 0) count++
      }
    }
  }
  return count
}