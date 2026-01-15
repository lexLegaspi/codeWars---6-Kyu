// You have the job to implement a countdown function that will be used for the next NASA spatial mission. The function takes a duration in milliseconds and return a string in countdown format.

// If it's counting down, the first character should be '-', if it's counting up it should be '+'. Then it should return the number of: hours (min 2 units), minutes (2 units) and seconds (2 units).

// countdown(-154800000)  // return  '-43:00:00'
// countdown(0)           // return  '+00:00:00'
// countdown(61000)       // return  '+00:01:01'
// countdown(360000000)   // return '+100:00:00'

// My Solution:

function countdown (millisecs) {
  // TODO ...
  let abs = Math.abs(millisecs)
  
  let hour = Math.floor(abs / 3600000);
  let minute = Math.floor((abs % 3600000) / 60000);
  let seconds = Math.floor((abs % 60000) / 1000);
  let result = (String(hour).padStart(2, '0') + ':' + String(minute).padStart(2, '0') + ':' + String(seconds).padStart(2,'0'))
  
  if(millisecs >= 0) {
    return "+" + result
  }
  return "-" + result
} 
