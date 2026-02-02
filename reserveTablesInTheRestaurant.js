// Your friend owns a busy restaurant and he asked you to help him figure out a way to manage table reservations. There are 10 tables in the restaurant (represented as objects):

// 4 tables for 2 people
// 2 tables for 3 people
// 2 tables for 4 people
// 1 table for 6 people
// 1 table for 8 people
// You need to write a function reserve that takes one argument:

// Input
// Bookings which is an array of integers representing all bookings for the same time. Each integer is a number of people for each booking. (example: [2, 4, 4] - one booking for 2 people, and two bookings for 4 people)

// Rules
// The restaurant has a set of rules about bookings:

// They don't reserve more than one table for any bookings.
// Therefore, they don't take bookings for more than 8 people.
// They can offer a bigger table for a booking but only if there will be just one spare seat left unoccupied at this table.
// The bookings are available on a first come first served basis.
// Output
// The function must return an array containing the names of tables that must be reserved and the list of the indexes of the bookings that weren't possible:

// [
//   ["table for two", "table for three", "table for three"],
//   "Bookings at the following indexes were not accepted: 0, 1, 4"
// }
// If all bookings are accepted, the second element is just an empty string.

// My Solution:

function reserve(bookings) {
  var forTwo = { name: "table for two", seats : 2, num: 4};
	var forThree = { name: "table for three", seats : 3, num: 2};
	var forFour = { name: "table for four", seats : 4, num: 2};
	var forSix = { name: "table for six", seats : 6, num: 1};
	var forEight = { name: "table for eight", seats : 8, num: 1};
///start coding here:
  let booked = []
  let notBooked = 'Bookings at the following indexes were not accepted: '
  bookings.forEach((x, i) => {
    
    
    if ((x == 2 || x == 1) && forTwo.num !== 0){
      booked.push(forTwo.name)
      forTwo.num --
    }else if((x == 3 || x == 2) && forThree.num !== 0){
      booked.push(forThree.name)
      forThree.num --
    }else if((x == 4 || x == 3) && forFour.num !== 0){
      booked.push(forFour.name)
      forFour.num --
    }else if((x == 6 || x == 5) && forSix.num !== 0){
      booked.push(forSix.name)
      forSix.num --
    }else if((x == 8 || x == 7) && forEight.num !== 0){
      booked.push(forEight.name)
      forEight.num --
    }else {
      notBooked += `${i}, `
    }
  })
  return [booked, notBooked.slice(0, -2)] //aaasdasd
  
}function reserve(bookings) {
  var forTwo = { name: "table for two", seats : 2, num: 4};
	var forThree = { name: "table for three", seats : 3, num: 2};
	var forFour = { name: "table for four", seats : 4, num: 2};
	var forSix = { name: "table for six", seats : 6, num: 1};
	var forEight = { name: "table for eight", seats : 8, num: 1};
///start coding here:
  let booked = []
  let notBooked = 'Bookings at the following indexes were not accepted: '
  bookings.forEach((x, i) => {
    
    
    if ((x == 2 || x == 1) && forTwo.num !== 0){
      booked.push(forTwo.name)
      forTwo.num --
    }else if((x == 3 || x == 2) && forThree.num !== 0){
      booked.push(forThree.name)
      forThree.num --
    }else if((x == 4 || x == 3) && forFour.num !== 0){
      booked.push(forFour.name)
      forFour.num --
    }else if((x == 6 || x == 5) && forSix.num !== 0){
      booked.push(forSix.name)
      forSix.num --
    }else if((x == 8 || x == 7) && forEight.num !== 0){
      booked.push(forEight.name)
      forEight.num --
    }else {
      notBooked += `${i}, `
    }
  })
  return [booked, notBooked.slice(0, -2)] || [[],''] //aaasdasd
  
}