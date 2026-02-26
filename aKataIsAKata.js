// Inspired by, obviously, this

// (It's recommended to watch the first 3 minutes of that video first.)

// You need to determine how many A presses is required for a segment of a complete run of a certain game.

// The A presses for the whole game will be passed in as an array of pairs, e.g: [[10,30],[35,90],[150,151],[250,400]], where the two elements in each array represent the beginning and the end of an A press respectively, in arbitrary time unit since the start of the game. The next two parameters are the start and end time of the segment.

// However, counting A presses is not that simple: a segment might begin and/or end during an A press. Thus we count the number of A presses in the following way:

// Every actual press of A button is counted as 1 A press.
// In addition, if the segment begins while an A press is held, it is counted as 0.5 A presses.
// Note that both A presses ranges and segment ranges are inclusive: an A press represented by [100,200] means that the A button is pressed before time 100 (and after time 99) and released after time 200 (but before time 201).

// My Solution: