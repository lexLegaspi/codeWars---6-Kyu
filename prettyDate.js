// Overview
// Write a helper function that accepts an argument (Ruby: a Time object / Others: number of seconds) and converts it to a more human-readable format. You need only go up to '_ weeks ago'.

// toPretty(0) => "just now"

// toPretty(40000) => "11 hours ago"
// Specifics
// The output will be an amount of time, t, included in one of the following phrases: "just now", "[t] seconds ago", "[t] minutes ago", "[t] hours ago", "[t] days ago", "[t] weeks ago".
// You will have to handle the singular cases. That is, when t = 1, the phrasing will be one of "a second ago", "a minute ago", "an hour ago", "a day ago", "a week ago".
// The amount of time is always rounded down to the nearest integer. For example, if the amount of time is actually 11.73 hours ago, the return value will be "11 hours ago".
// Only times in the past will be given, with the range "just now" to "52 weeks ago"

// My Solution:

function toPretty(seconds) {
    if (seconds > 604800){
      let week = Math.floor(seconds / 3600 / 24 / 7)
      return week>1?`${week} weeks ago`: `a week ago`
    }
    if (seconds > 86400){
      let day = Math.floor(seconds / 3600 / 24)
      return day>1?`${day} days ago`: `a day ago`
    }
    if (seconds > 3600){
      let hour = Math.floor(seconds / 3600)
      return hour>1?`${hour} hours ago`: `an hour ago`
    }
    if (seconds > 60){
      let minute = Math.floor(seconds / 60)
      return minute>1?`${minute} minutes ago`: `a minute ago`
    }
    if (seconds == 0) return 'just now'
    return seconds>1?`${seconds} seconds ago`: `a second ago`
}