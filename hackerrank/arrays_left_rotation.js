let a = [1, 2, 3, 4, 5]
//a = [2, 3, 4, 5, 1]
//a = [3, 4, 5, 1, 2 ]
d = 2 

function rotLeft(a, d) {
    let n = a.length 
    let sliceStart = d % n 
    
    let slice = a.slice(sliceStart, n)
    let slice2 = a.slice(0, sliceStart)
    console.log(slice2)
    
    let finalArray = [...slice, ...slice2]
    console.log(finalArray)
    return(finalArray)
    }
    