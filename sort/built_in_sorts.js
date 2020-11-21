
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

function numberCompare2(num1, num2){
    return num2 - num1
}

console.log([6, 4, 15, 10].sort(numberCompare))
console.log([6, 4, 15, 10].sort(numberCompare2))

// Sort by string length 

function compareByLen(str1, str2){
    return str1.length - str2.length
}

console.log(["house", "car", "tree"].sort(compareByLen))
