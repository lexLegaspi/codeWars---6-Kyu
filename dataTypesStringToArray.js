// You are given a string of numbers, letters and spaces.

// Implement the function dataTypes which should return an array of the following three JavaScript data types: Strings, Numbers, Booleans. Each set of charactes which does not contain numbers or spaces should be considered as one string. An exception are the values of True and False which should be evaluated to 'boolean.' See below for some examples.

// Examples:

// "You are number 1" // [string, string, string, number]
// "123gjet" // [number, string]
// "truestring1" // [boolean, string, number]

// My Solution:

function dataTypes(string) {
  let array = []
  let newToken = true

  for (let i = 0; i < string.length; i++) {

    if (string[i] === ' ') {
      newToken = true
      continue
    }

    if (
      newToken &&
      string.slice(i, i + 4).toLowerCase() !== 'true' &&
      string.slice(i, i + 5).toLowerCase() !== 'false'
    ) {
      if (Number.isInteger(+string[i])) {
        array.push('number')
      } else {
        array.push('string')
      }
      newToken = false

    } else if (string.slice(i, i + 4).toLowerCase() === 'true') {
      array.push('boolean')
      i += 3
      newToken = false

    } else if (string.slice(i, i + 5).toLowerCase() === 'false') {
      array.push('boolean')
      i += 4
      newToken = false

    } else {
      if (Number.isInteger(+string[i])) {
        if (newToken || array[array.length - 1] !== 'number') {
          array.push('number')
        }
      } else {
        if (newToken || array[array.length - 1] !== 'string') {
          array.push('string')
        }
      }
      newToken = false
    }
  }

  return array
}