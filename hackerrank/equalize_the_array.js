function equalizeArray(arr) {
    let h = {}
    for(let num of arr){
      h[num] ? h[num] ++ : h[num] = 1
    }
    let maxVal = Object.values(h).reduce((a, b) => a > b ? a : b);
    if(maxVal === 1){
      return arr.length - 1
    }
    else{
      return arr.length - maxVal
    }
}