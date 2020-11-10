//recursion

var reverseString = function(s) {
    let i = 0 
    let j = s.length - 1

    function helper(i, j){
    //if (i === j) {
       // return s}
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
    return s
};