//Interview practice: Dictionaries and Hashmaps 
//Given two strings, detemine if they share a common substring
function twoStrings(s1, s2) {
    let s2Obj = {}
    
    for(let letter of s2){
      s2Obj[letter] ? s2Obj[letter]+= 1 : s2Obj[letter] = 1
    }
    
    for(let letter of s1){
      if(s2Obj[letter]){
        return 'YES'
      }
    }
    return 'NO'
    
    }