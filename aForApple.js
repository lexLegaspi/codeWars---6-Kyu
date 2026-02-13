// Input: Integer n
// Output: String
// Example:

// a(4) prints as

//    A   
//   A A  
//  A A A 
// A     A
// a(8) prints as

//        A       
//       A A      
//      A   A     
//     A     A    
//    A A A A A   
//   A         A  
//  A           A 
// A             A
// a(12) prints as

//            A           
//           A A          
//          A   A         
//         A     A        
//        A       A       
//       A         A      
//      A A A A A A A     
//     A             A    
//    A               A   
//   A                 A  
//  A                   A 
// A                     A
// Note:

// Each line's length is 2n - 1
// Each line should be concatenate by line break "\n"
// If n is less than 4, it should return ""
// If n is odd, a(n) = a(n - 1), eg a(5) == a(4); a(9) == a(8)


// My Solution:

function a(n) {
  //your code here
    if (n < 4) return '';
    if (n % 2 !== 0) n = n-1
  
    let line = n
    let whiteSpace = ' '
    let result = ''
        for (let i=0; i<line;i++) {
          if(i == (line/2)){
            result += `${whiteSpace.repeat(line - i - 1)}A${' A'.repeat(i - 1)} A${whiteSpace.repeat(line - i - 1)}\n`
          }else if(i == 0){
            result += `${whiteSpace.repeat(line - i - 1)}A${whiteSpace.repeat(line - i -1 )}\n`
          }else{
            result += `${whiteSpace.repeat(line - i - 1)}A${whiteSpace.repeat(i * 2 - 1)}A${whiteSpace.repeat(line - i - 1)}\n`
        }

    }
  return result.trimEnd()
}
