// Test cases
const spans =  [
    [1910, 1950], 
    [1900, 1951], 
    [1945, 2000]]
const spans2 = [
    [1900, 1950]
]
const spans3 = [
    [1900, 1950],
    [1952, 2000]
]
    
function mostAliveYears(spans){
    let h = {}                      // Create an object that represents a histogram 
    let finalYears = []             // Create an array that will store the years 
  
    spans.forEach(span => {         // Iterate through the array of lifespans
        let year = span[0]          // Starting from the birth year to death year,
        while(year <= span[1]){     // add the years lived to histogram object
             h[year] ? h[year]++ : h[year] = 1
            year++
        }
     })
        
    // Calculate the highest number of people lived in a year
    let maxYearValue = Object.values(h).reduce((a, b) => a > b ? a : b);
        
    for(let year in h){                    // Iterate through the histogram object
        if(h[year] === maxYearValue){      // If that year's # of lived people equals max,
            finalYears.push(parseInt(year))    // add that year into an array
        }
    }
    return(finalYears)
  }
  
  // Test case results
  console.log(mostAliveYears(spans))
  console.log(mostAliveYears(spans2))
  console.log(mostAliveYears(spans3))
  