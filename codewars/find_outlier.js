function findOutlier(arr){
    let odds = 0 
  let evens = 0
  for(let i = 0; i < 3; i++){
    if(arr[i] % 2 === 0){
      evens++
    }else odds++
  }
  if(evens > odds){
    for(let num of arr){
      if(num % 2 !== 0){
        return num
      }
    }
  }
  else{
     for(let num of arr){
      if(num % 2 === 0){
        return num
      }
    }
  }
  }