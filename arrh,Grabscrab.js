// Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.

// At long last, we need a way to unscramble what these pirates are saying.

// Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant.

// For example:

// grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )
// Should return ["sport", "ports"].

// Return matches in the same order as in the dictionary. Return an empty array if there are no matches.

// Good luck!

// My Solution:

function grabscrab(anagram, dictionary) {
    // Your code here
    let result = []
    for (let i = 0; i < dictionary.length; i++) {
        if (dictionary[i].length != anagram.length) {
            continue
        } else {
            let word = dictionary[i]
            let tester = anagram.split('')

            for (let j = 0; j < word.length; j++) {
                if (tester.includes(word[j])) {
                    tester[tester.indexOf(word[j])] = 'removed'
                }
            }
            if (tester.every(x => x == "removed")) {
                result.push(dictionary[i])
            }
        }
    }
    return result
}