function squares(a, b) {
    //   let sqCount = 0 
    
    //   for(let i = a; i <= b; i++){
    //     let root = Math.sqrt(i)
    
    //     let floor = Math.floor(root)
    //     if(root - floor === 0){
    //       sqCount++
    //     }
    //   }
    //   console.log(sqCount)
    //   return(sqCount)
    
      let sqCount = 0 
    
      let x = 1
    
      while(x * x < a){
        x++
      }
      while(x * x <= b){
        sqCount++
        x++
      }
      return sqCount
    }
    