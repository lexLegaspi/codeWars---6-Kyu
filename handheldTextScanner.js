// Description:
// We have a hand-held text scanner. It is very simple to use, move it from the left to the right on the text that needs to be scanned, and we'll get such the results:

// ["trainin","ning in","in code","odewars"]
// We can see, the adjacent scan results have some characters that are duplicate, and your task is to eliminate duplicate characters to get a full scan of the text.

// fullScan(["trainin","ning in","in code","odewars"])
// should return: "training in codewars"
// In order to make kata more interesting, our text is not always a single line, sometimes it is a multi line text. See examples:

// part1=   |part2=    | part3=   | part4=   | part5=
// `trainin | `ning in | `in code | `odewars | `wars
// give me` |  me a n` |  nice s` | e solut` | olution`

// fullScan([part1,part2,part3,part4,part5])
// should return: 
// `training in codewars
// give me a nice solution`
// You can assume that all inputs are valid.

// A bit difficulty, A bit of fun, happy coding ;-)

// My Solution:

