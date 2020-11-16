//recursion

var reverseString = function(str) {
    let s = str.split("")
    let i = 0 
    let j = s.length - 1

    function helper(i, j){
    if (j < i){
        return
    }
    else{
        let tempI = s[i]
        let tempJ = s[j]
        s[i] = tempJ
        s[j] = tempI
        
        helper(i + 1, j -1)
    }
    }
    
    helper(0, s.length -1)
    return s.join("")
};

console.log(reverseString("hello"))