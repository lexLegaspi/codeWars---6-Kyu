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