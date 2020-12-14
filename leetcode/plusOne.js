let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]

var plusOne = function(digits) {
  let num = digits.join("") //turn to string

  num = BigInt(num)


  num = num + 1n
  let str = num.toString()
  let arr = Array.from(str)

  arr = arr.map(num => 
      parseInt(num))

  let diff = digits.length - arr.length 

  for(i = 0; i < diff; i++){
  arr.unshift(0)
  }
  return arr
};