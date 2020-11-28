function descendingOrder(n){
    let str = n.toString()
    let strArr = str.split("")
  
  
    let arr = strArr.map(num => 
      num = parseInt(num)
    )
  
    arr = arr.sort((a, b) => b - a)
    return(parseInt(arr.join("")))
  }