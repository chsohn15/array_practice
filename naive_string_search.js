//Count number of times a smaller string appears in a longer string

function stringSearch(long, short){
    let count = 0 
    for(let i = 0; i < long.length; i ++){
        for(j = 0; j < short.length; j++ ){
            if(short[j] !== long[i+ j]){
                break
            }
            if(j === short.length - 1){
                count++
            }
        }
    }
    return count
}

console.log(stringSearch("lorie loled", "lol"))