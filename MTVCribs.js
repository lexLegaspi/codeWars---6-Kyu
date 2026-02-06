// Given n representing the number of floors build a beautiful multi-million dollar mansions like the ones in the example below:

//      /\
//     /  \
//    /    \
//   /______\  number of floors 3
//   |      |
//   |      |
//   |______|

//      /\
//     /  \
//    /____\
//    |    |   2 floors
//    |____|

//      /\
//     /__\    1 floor
//     |__|
// Note: whitespace should be preserved on both sides of the roof. Number of floors will go up to 30. There will be no tests with invalid input.

// If you manage to complete it, you can try a harder version here.

// Good luck!

// My Solution:

function myCrib(n) {
  let numOfFloors = n
  let whiteSpace = ' '
  let floorCeil = '_'
  let result = ''
    for (let i=0; i<=numOfFloors;i++) {
      if(i == 0){
        result += `${whiteSpace.repeat(numOfFloors - i)}/\\${whiteSpace.repeat(numOfFloors - i)}\n`
      } else if(i == numOfFloors){
        result += `${whiteSpace.repeat(numOfFloors - i)}/${floorCeil.repeat(i * 2)}\\${whiteSpace.repeat(numOfFloors - i)}\n`
      }else{
        result += `${whiteSpace.repeat(numOfFloors - i)}/${whiteSpace.repeat(i * 2)}\\${whiteSpace.repeat(numOfFloors - i)}\n`
      }

    }

    for (let i=0; i<numOfFloors;i++) {
      if(i == numOfFloors - 1){
        result += `|${floorCeil.repeat(numOfFloors * 2)}|`
      } else{
        result += `|${whiteSpace.repeat(numOfFloors * 2)}|\n`
      }
    }
  
  return result
}