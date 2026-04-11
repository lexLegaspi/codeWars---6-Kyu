// You are to write a function, stringIntGreaterThan that must accept arguments, each being the string representation of an positive or negative integer of any length (could contain a thousand digits, or more; also, integers will not have leading zeros).

// The function should then return true if the first argument is greater than the second argument, false if not.

// My Solution: 


function stringIntGreaterThan(a, b) {
  if (a == b) return false
  return (+a>+b)
}

 ############################  OR  ##############################


function stringIntGreaterThan(a, b) {
  let aFirst = a[0]
  let bFirst = b[0]
  if (aFirst =='-' && bFirst != '-') return false
  if (a.length > b.length && aFirst !== '-') {
    return true
  } 
  else if (a.length > b.length && aFirst === '-' && bFirst === '-') {
    return false
  } 
  else if (a.length < b.length && bFirst === '-') {
    return true
  } 
  else if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] === b[i]) continue

      if (a[i] > b[i]) {
        if (aFirst === '-' && bFirst === '-') return false
        else if (aFirst === '-') return false
        else return true
      } else {
        if (aFirst === '-' && bFirst === '-') return true
        else if (aFirst === '-') return true
        else return false
      }
    }
    return false
  } 

  return false
}