let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]

let num = digits.join("")
console.log(num)
num = parseFloat(num)
console.log(num)

num = num + 1
let str = num.toString()
let arr = Array.from(str)
console.log("array:" + str)
arr = arr.map(num => 
  parseInt(num))

let diff = digits.length - arr.length 
console.log(diff)
if(diff > 0){
  arr.unshift(0)
}
console.log(arr)


var plusOne = function(digits) {
    let arr1 = digits.slice(0, digits.length - 1)
 
     let last = digits[digits.length -1]
     
     if(last < 9){
         last++ 
         arr1 = [...arr1, last]
     }else if(last ===9){
         
         let nextToLast = digits[digits.length -2]
         nextToLast++ 
         last = 0
         arr1 = [...arr1, nextToLast, last]
     }
     return arr1
 };