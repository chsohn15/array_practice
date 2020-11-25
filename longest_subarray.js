// Test cases
const a = [1,7,7,3]
const b = [1,7,7,3,9,9,9,4,9]
const c = []
const d = [1]
const e = [-1, -1, 2, 5, -1]
const f = [1, 2, 3, 4]
const g = [7, 7, 7, 4]

function longestSubArr(a){
    let i = 0          // Initialize i as the first item of the array
    let j = 1          // Initialize j as the second item in the array
    let subLen = 1     // temporary subarray length
    let maxSubLen = 0  // maximum subarray length
    const len = a.length 

    // Edge cases for arrays of length 1 or 0
    if(len === 1) return 1
    else if (len === 0) return 0

    // Loop through array to compare values at i and j
    for(j; j < len; j++){
        if(a[i] === a[j]){
            subLen++    // increment temporary subarray length if values at i and j are equal
        }
        else if(a[i] !== a[j]){
            if(subLen > maxSubLen){
                maxSubLen = subLen  // Save subarray length as maximum length if applicable
            }
            subLen = 1   // Reset subarray length to 1 for next loop
            i = j        // i moves to j's current position
            }
        }
    return maxSubLen
}




// Create array of arguments to test (from variables above)
let testArguments = [a, b, c, d, e, f, g]

// Print return values of function based on different arguments
for(let arg of testArguments){
    console.log(`The longest continuous subarray length of [${arg}] is ` + longestSubArr(arg))
}

