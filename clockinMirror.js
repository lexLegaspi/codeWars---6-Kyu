// Peter can see a clock in the mirror from the place he sits in the office. When he saw the clock shows 12:22

// He knows that the time is 11:38

// in the same manner:

// 05:25 --> 06:35

// 01:50 --> 10:10

// 11:58 --> 12:02

// 12:01 --> 11:59

// Please complete the function WhatIsTheTime(timeInMirror), where timeInMirror is the mirrored time (what Peter sees) as string.

// Return the real time as a string.

// Consider hours to be between 1 <= hour < 13.

// So there is no 00:20, instead it is 12:20.

// There is no 13:20, instead it is 01:20.

// My Solution:

function WhatIsTheTime(timeInMirror)
{
            //"05:25" --> "06:35";
            // Happy Coding
  let hour = timeInMirror.split(':')[0]
  let minute = timeInMirror.split(':')[1]
  let realHour = 0
  let realMinute = 0
  if (minute == 0) {
    realHour = 12 - hour
    realMinute = 0
  } else {
    realHour = 11 - hour
    realMinute = 60 - minute
  }
  
  if (realHour <= 0) {
    realHour = realHour + 12
  }
  
//formatted = String(num).padStart(2, "0");
  if (realHour < 10) {
   realHour = String(realHour).padStart(2, "0")
  }
  
  if (realMinute < 10) {
   realMinute = String(realMinute).padStart(2, "0")
  }

  return `${realHour}:${realMinute}`
}