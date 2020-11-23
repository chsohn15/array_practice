function pageCount(n, p) {
    function fromStart(){
        if (p % 2 ===0) 
            return p/2 
        else if (p % 2 !==0) 
            return Math.floor((p-1)/2) 
    }
  function fromEnd(){
    if (n % 2 === 0) return Math.ceil((n-p)/2) 
    else return Math.floor((n-p)/2)
  }
  console.log(Math.min(fromStart(), fromEnd()))
    return(Math.min(fromStart(), fromEnd()))
}