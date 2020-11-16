let str = "aba" //length = 3, 2 a's
let n = 10

//Count number of a's with a counter
//If no a's, return zero

//Find number of repetitions of substring (n / str.length)
//Calculate a's
//Find modulo (aka partial string of substring - n % str.length)
//Count number of a's in partial string 

//aba aba aba a

function repeatedString(str, n) {
  let counter =0 
  let l = str.length
  
  for(let letter of str){
    if(letter === "a"){
      counter++
    }
  }
  if (counter === 0){
    return 0
  }

  //Find complete repetitions 
  let repsFloat = n/l
  let reps = Math.floor(repsFloat)

  let aCount = reps * counter 

  let partialReps = n % l 
  let partial = str.slice(0, partialReps)


    for(let letter of partial){
    if(letter === "a"){
      aCount++
    }
  }

  console.log(aCount)
  return aCount

}
repeatedString(str, n)
