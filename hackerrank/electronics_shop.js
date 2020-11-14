function getMoneySpent(keyboards, drives, b) {
    //find difference between budget and keyboard price
    let totalPriceArray = []
    keyboards.forEach(boardPrice => {
      let balance = b - boardPrice 
  
      let driveMaxPrice = 0 
  
      drives.forEach(drive => {
        if(drive <= balance && drive > driveMaxPrice){
          driveMaxPrice = drive
        }
      })
  
      if(driveMaxPrice === 0){
        totalPriceArray.push(-1)
      }
      else{
      let mostSpent = boardPrice + driveMaxPrice
  
      totalPriceArray.push(mostSpent)
      }
    })
     return(Math.max(...totalPriceArray))
  
  }


let keyboards = [3, 1]
let drives = [3, 7, 8]
b = 10