//arr = [1,0,2,3,0,4,5,0]
arr = [8,4,5,0,0,0,0,7]

// Count number of zeroes
let zeroCount = 0 
arr.forEach(num => {
    if(num === 0){
        zeroCount += 1
    }
})

// Subtract from zero count if zeroes are in index spaces to be overwritten
for(let j = arr.length - 1; j > arr.length - zeroCount - 1; j --){
    if(arr[j] === 0){
        zeroCount -=1
    }
}

//Shift indices to the right, with duplicate zeroes
let i = arr.length - zeroCount -1 
while (i >= 0){
     arr[i + zeroCount] = arr[i] 

      if (arr[i] === 0 && zeroCount > 0){
        zeroCount -- 
        arr[i + zeroCount] = arr[i] 
        }
     else if(arr[i]===0){
        arr[i + zeroCount] = arr[i] 
    }

    i--
} 

console.log(arr)