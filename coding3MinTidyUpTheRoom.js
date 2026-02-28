// Description:
// This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version

// Task:
// Give you a room(n x n matrix), there are some sundries(any character except spaces). Our task is to put the sundries neatly placed in the upper left corner of the room(a small metrix)

// Example:
// example1:

// room:[
// ["a"," "," "," "," "],
// [" "," ","b"," "," "],
// [" "," "," "," "," "],
// [" ","c"," "," "," "],
// [" "," ","d"," "," "]
// ]
// There are 4 sundries in the room(a,b,c,d), so we put them in the 2x2 matrix, output should be:

// [
// ["a","b"," "," "," "],
// ["c","d"," "," "," "],
// [" "," "," "," "," "],
// [" "," "," "," "," "],
// [" "," "," "," "," "]
// ]
// example2:

// room:[
// ["a"," "," "," "," "],
// [" "," ","b"," "," "],
// [" "," "," "," "," "],
// [" ","c"," "," "," "],
// [" "," ","d","e"," "]
// ]
// There are 5 sundries in the room(a,b,c,d,e), they cannot be put into the 2x2 matrix, so we put them in the 3x3 matrix, output should be:

// [
// ["a","b","c"," "," "],
// ["d","e"," "," "," "],
// [" "," "," "," "," "],
// [" "," "," "," "," "],
// [" "," "," "," "," "]
// ]

// My solution:


function sc(room){
  let letters = [].concat(...room).filter(x => x !== " ")
  let answer=room.map(x => x.map(() => ' '))
  
  letters = letters.reverse()
  let limit = Math.ceil(Math.sqrt(letters.length))
  for (let i=0; i< room.length;i++) {
    for(let j=0; j<limit;j++){
        if (letters.length == 0) break
        answer[i][j] = letters.pop()
    }
    
  }
  
  return answer
}