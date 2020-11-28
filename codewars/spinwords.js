function spinWords(str){
  
    let arr = str.split(" ")
  
    arr = arr.map(word => {
     if(word.length >= 5){
      let splitWord = word.split("")
      word = []
      for(let i = splitWord.length -1 ; i >= 0; i--){
         word.push(splitWord[i])
      }
      word = word.join("")
    }
    return word
  })
    
    return arr.join(" ")
  }