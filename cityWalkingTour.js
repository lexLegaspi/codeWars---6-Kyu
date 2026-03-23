// A group of tourists is going on a sightseeing tour of the city of K, starting and ending at the hotel.

// The tour must start at the designated time and end before the specified time.
// An average walking speed (5 km/h) is used for transitions between attractions, and each attraction
// has its own designated viewing time and coordinates (x, y).

// It is necessary to determine whether the group will be able to visit all the planned attractions and return to the hotel.

// Input:
// There is a function that takes 4 parameters as input

// function isPossibleToVisitAll(attractions, hotelCoords, startTimeStr, closeTimeStr) {}
// the first parameter is an non-empty array of attractions, each attraction is an object with (x, y) coordinates and viewing time v in minutes
// the second parameter is the hotel coordinates (start and end point) in the format (x, y)
// the third parameter is a string in the HH:MM format - the start time of the tour
// the fourth parameter is a string in the HH:MM format - the returning time to the hotel
// Output:
// The function must return a boolean value (true or false) indicating whether the group completed the entire planned tour and returned to the hotel by the specified time.

// Notes:
// Attractions have to be visited in the order of the given list. The distance between coordinates is measured in kilometers in the Euclidean system of measures. The tour must start and end on the same day.

// My Solution:


function isPossibleToVisitAll(attractions, hotelCoords, startTimeStr, closeTimeStr){
  let closeTimeInt = closeTimeStr.split(':').map(Number);
  closeTimeInt[0] = closeTimeInt[0] * 60;

  let startTimeInt = startTimeStr.split(':').map(Number);
  startTimeInt[0] = startTimeInt[0] * 60;

  let availableTime =
    closeTimeInt.reduce((a,b) => a + b, 0) -
    startTimeInt.reduce((a,b) => a + b, 0);

  let timeRequired = 0;

  for (let i = 0; i < attractions.length; i++) {

    if (i == 0 || i == attractions.length - 1) {
      let dx = hotelCoords.x - attractions[i].x;
      let dy = hotelCoords.y - attractions[i].y;
      let distance = Math.sqrt(dx * dx + dy * dy);

      timeRequired += distance * 12;
    }

    if (i > 0) {
      let dx = attractions[i - 1].x - attractions[i].x;
      let dy = attractions[i - 1].y - attractions[i].y;
      let distance = Math.sqrt(dx * dx + dy * dy);

      timeRequired += distance * 12;
    }

    timeRequired += attractions[i].v;
  }

  return timeRequired <= availableTime;
}