//arr = [1,0,2,3,0,4,5,0]
arr = [8,4,5,0,0,0,0,7]

let zeroCount = 0 
arr.forEach(num => {
  if(num === 0){
    zeroCount += 1
  }
})


console.log(zeroCount)

for(let j = arr.length - 1; j > arr.length - zeroCount - 1; j --){
  if(arr[j] === 0){
    zeroCount -=1
  }
}

console.log(zeroCount)
console.log(arr)

// start while loop at original length - 1
let i = arr.length - zeroCount -1 //index 7 
console.log(i)
while (i >= 0){
  arr[i + zeroCount] = arr[i] 

  if (arr[i] === 0){
    zeroCount --
    arr[i + zeroCount] = arr[i] 
  }

  i--
} 
console.log(arr)