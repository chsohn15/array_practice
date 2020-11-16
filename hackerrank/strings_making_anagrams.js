function makeAnagram(a, b) {

    //make frequency hash for both strings
    //make counter to count number of deletions to be made because of object difference
    //Iterate through object A 
    //If object B at same key is not found, add objectB key's value to the counter 
    //Otherwise find absolute value difference between two values at same keys and add that value to the counter
    //Eliminate key or set to zero in Object b
    let counter = 0
    let aObj = {}
    for(let letter of a){
      aObj[letter] ? aObj[letter]++ : aObj[letter] = 1
    }

    let bObj = {}
    for(let letter of b){
      bObj[letter] ? bObj[letter]++ : bObj[letter] = 1
    }

    for(let key in aObj){
      if(!bObj[key]){
        counter+= aObj[key]
      }
      else{
        let diff = Math.abs(aObj[key] - bObj[key])
        
        counter += diff
        bObj[key] = 0
      }
    }
    //Sum extra letters in b 
    let vals = Object.values(bObj)
    let sum = vals.reduce((a, b) => a+b, 0)

    counter += sum 
    return counter
}

a = "cde"
b = "abc"

makeAnagram(a, b)