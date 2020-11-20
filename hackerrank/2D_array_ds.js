let arr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
  ]
  
  //Find highest hourglass sum
  
  function hourglassSum(arr) {
  
  let l = arr.length
  let i = 0 
  let j =0 
  let maxSum = 0 
  
  for(i = 0; i <=3; i++){
    for(j = 0; j<=3; j++){
        let spot1 = arr[i][j]
        let spot2 = arr[i][j+1]
        let spot3 = arr[i][j+2]
        let spot4 = arr[i+1][j+1]
        let spot5 = arr[i+2][j]
        let spot6 = arr[i+2][j+1]
        let spot7 = arr[i+2][j+2]
  
          let sum = spot1 + spot2 + spot3 + spot4 + spot5 + spot6 + spot7
  
            if(sum > maxSum){
            maxSum = sum
      }
    }
  }
    console.log(maxSum)
    return maxSum
  }
  
  
  console.log(hourglassSum(arr))