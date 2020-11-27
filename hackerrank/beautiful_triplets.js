function beautifulTriplets(d, arr) {
    let counter = 0 
    for(let i = 0 ; i < arr.length - 2; i++){
      if(arr.includes(arr[i] + d) && arr.includes(arr [i] + d +d)){
        counter++
      }
    }
    console.log(counter)
    return counter
  }