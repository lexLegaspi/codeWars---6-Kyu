// Ben, Amy and Sam are playing a card game. It's a bit like blackjack where the person whose score is the closest to but not bigger than 21 is the winner. However, Ben, Amy and Sam are in a hurry so they only get to pick one extra card if they want to. Also they've decided that Aces are always equal to 10.

// Your job is to write a function that returns a nested array of the players and their scores in the order of winner to loser.

// Arguments:

// An object containing players and their cards. Each player will need to have their cards added together to work out their current score.

// An extra card which will need to be added to certain players scores

// An array containing the names of players who choose to have the value of the extra card added to their score

// Rules:

// The person whose name is in the second argument must have the value of the extra card added to their score

// If there is a draw, players with the same score must be presented in alphabetic order e.g. if Ben and Sam both have a score of 10, Ben must be written first.

// All picture cards(A, K, Q, J) are equal to 10

// Remember if a player's score exceeds 21 they cannot win

// Example
// var players = {
//   "Ben" : "5, 2",
//   "Amy" : "4, 3",
//   "Sam" : "3, 10",
// };

// whoWins(players, 3, ["Ben", "Amy"])
// //should return [["Sam", 13], ["Amy", 10], ["Ben", 10]];

// My Solution:

function whoWon(players, extraCard, extraTakers) {
  //write your code here
  let result = [];
  let bustArr = [];
  for (const [key, value] of Object.entries(players)) {
    let score = value
      .split(", ")
      .map((x) => {
        if ("AJQK".includes(x)) {
          return 10;
        } else {
          return Number(x);
        }
      })
      .reduce((a, b) => a + b, 0);

    if (extraTakers.includes(key)) {
      if ("AJQK".includes(extraCard)) {
        score += 10;
      } else {
        score += extraCard;
      }
    }
    if (score > 21) {
      bustArr.push([key, score]);
    } else {
      result.push([key, score]);
    }
  }

  result = result.sort((a, b) => {
    if (b[1] !== a[1]) {
      return b[1] - a[1];
    }
    return a[0].localeCompare(b[0]);
  });

  bustArr = bustArr.sort((a, b) => {
    if (b[1] !== a[1]) {
      return a[1] - b[1];
    }
    return a[0].localeCompare(b[0]);
  });

  return result.concat(bustArr);
}
