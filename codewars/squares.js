var isSquare = function(n){
    if (n < 0) {
      return false
    }
  let square = Math.floor(Math.sqrt(n))
    if(square * square === n){
      return true
    }
    return false; // fix me
  }