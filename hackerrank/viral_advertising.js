function viralAdvertising(n) {
    let recipients = 5
    let sumLiked = 0
    let day = 1
    while(day <= n ){
      let liked = Math.floor(recipients/2)
      sumLiked += liked 
      recipients = liked * 3 
      day++
    }
    console.log(sumLiked)
    return sumLiked
}