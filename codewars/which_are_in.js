let array1 = ["arp", "live", "strong"]

let array2 = ["lively", "alive", "harp", "sharp", "armstrong"]

function inArray(array1,array2){
let arr = []
for(let word of array1){
  for(let word2 of array2){
    if(word2.includes(word)){
      arr.push(word)
      break
    }
  }
}
return arr.sort()
}