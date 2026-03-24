// You are given a string and a transformation pattern (an array of operations). Your task is to apply the operations in order to the string and return the final result.

// Each operation in the pattern is one of:

// "U" → convert the string to uppercase

// "L" → convert the string to lowercase

// "R" → reverse the string

// "D" → duplicate each character (e.g., "abc" → "aabbcc", "qqbbcc" → "qqqqbbbbcccc")

// stringTransformation("abcd", ["U","R"]) // "DCBA"
// // "abcd" → "ABCD" → "DCBA"

// stringTransformation("abc", ["D","L"])  // "aabbcc"
// // "abc" → "aabbcc" → "aabbcc" (lowercase already applied)

// stringTransformation("AbCd", ["L","R"]) // "dcba"
// // "AbCd" → "abcd" → "dcba"
// Note:

// Input string length is 1 <= n <= 10^5, length of transformations is 0 <= n <= 10^5, in all tests is guaranteed that the string will be not longer than 10^8.

// My Solution: