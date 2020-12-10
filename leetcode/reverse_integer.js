var reverse = function(x) {
    let negative = false
    if(x < 0){
        negative = true
    }

    let str = (Math.abs(x)).toString()

    let arr = Array.from(str)
    let newArr = []
    for(let i = arr.length -1; i >= 0; i--){
        newArr.push(arr[i])
    }
    let n = parseInt(newArr.join(""))

    if((Math.abs(n)) > 2147483647){
        return 0
    }
    else if(negative){
        return(-1 * n)
    }
    else{
        return(n)
    }
};