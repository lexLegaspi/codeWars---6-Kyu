// Someone was hacking the score. Each student's record is given as an array The objects in the array are given again as an array of scores for each name and total score. ex>

// var array = [
//   ["name1", 445, ["B", "A", "A", "C", "A", "A"]],
//   ["name2", 110, ["B", "A", "A", "A"]],
//   ["name3", 200, ["B", "A", "A", "C"]],
//   ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]]
// ];
// The scores for each grade is:

// A: 30 points
// B: 20 points
// C: 10 points
// D: 5 points
// Everything else: 0 points
// If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded. After all the calculations, the total score should be capped at 200 points.

// Returns the name of the hacked name as an array when scoring with this rule.

// var array = [
//   ["name1", 445, ["B", "A", "A", "C", "A", "A"]],     // name1 total point is over 200 => hacked
//   ["name2", 110, ["B", "A", "A", "A"]],               // name2 point is right
//   ["name3", 200, ["B", "A", "A", "C"]],               // name3 point is 200 but real point is 90 => hacked
//   ,
//   ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]] // name4 point is right
// ];

// return ["name1", "name3"];

// My Solution:

function findHack(arr) {
  arr = arr.map((x) => x.flat());
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let totalPoint = 0;
    let bCounter = 0;

    for (let j = 2; j < arr[i].length; j++) {
      if (arr[i][j] === "A") {
        bCounter++;
        totalPoint += 30;
      } else if (arr[i][j] === "B") {
        bCounter++;
        totalPoint += 20;
      } else if (arr[i][j] === "C") {
        totalPoint += 10;
      } else if (arr[i][j] === "D") {
        totalPoint += 5;
      }
    }

    if (bCounter === arr[i].slice(2).length) {
      totalPoint += 20;
    }

    totalPoint = Math.min(totalPoint, 200);

    if (arr[i][1] > 200 || arr[i][1] !== totalPoint) {
      result.push(arr[i][0]);
    }
  }

  return result;
}
