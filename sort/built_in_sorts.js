
// sorting strings alpahbetically (capitals matter)
let stringArray = ["Christina", "Sohn","Koala", "Flatiron"]
console.log(stringArray.sort())

// Built in sort method accepts optional comparator function  
// Use comparator function to tell Javascript how to sort
// Comparator looks at pairs of elements ( a and b ) and determines 
// sort order based on return value
// If it returns a negative number, a should come before b

function numberCompare(num1, num2){
    return num1 - num2
}

console.log([6, 4, 15, 10].sort(numberCompare))

