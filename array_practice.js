//arr = [1,0,2,3,0,4,5,0]
//arr = [8,4,5,0,0,0,0,7]
arr= [9,9,9,4,8,0,0,3,7,2,0,0,0,0,9,1,0,0,1,1,0,5,6,3,1,6,0,0,2,3,4,7,0,3,9,3,6,5,8,9,1,1,3,2,0,0,7,3,3,0,5,7,0,8,1,9,6,3,0,8,8,8,8,0,0,5,0,0,0,3,7,7,7,7,5,1,0,0,8,0,0]
arr2 = [1,5,2,0,6,8,0,6,0]

//Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

//Note that elements beyond the length of the original array are not written.

//Do the above modifications to the input array in place, do not return anything from your function.

var duplicateZeros = function(arr) {
    let zeroCount = 0 
  
//Count number of zeros, decrease limit with each zero that needs to be duplicated
  limit= arr.length -1
  for(let i = 0; i <= limit; i++){
    
    if (arr[i] === 0 && i === limit){
      zeroCount += 1
    }
    else if (arr[i] === 0){
      zeroCount += 1
      limit --
    }
  }
 
     
     
     //Shift indices to the right, with duplicate zeroes
     let i = limit
     let a = zeroCount
 
     while (i >= 0){

        //Have condition to make sure limit plus zeroCount is less than arr.length
         //Shift indicies to the right
         if (i + a < arr.length){
          arr[i + zeroCount] = arr[i] 
         }
 
         // If the number equals 0, zeroCount is greater than 0 and limit plus zero count is less than or equal to array.length
        //decrement zeroCount by 1
         //Add another zero one index left of the previously placed one
           if (arr[i] === 0 && zeroCount > 0 && (i + a) <= arr.length ){
             zeroCount -- 
             arr[i + zeroCount] = arr[i] 
             }
 
         i--
     } 
 
     return arr
 };

 console.log(duplicateZeros(arr))
 console.log(duplicateZeros(arr2))


//  let zeroCount = 0 
  
//   //Count number of zeros, decrease limit with each zero that needs to be duplicated
//   limit= arr.length -1
//   for(let i = 0; i <= limit; i++){
    
//     if (arr[i] === 0 && i === limit){
//       zeroCount += 1
//     }
//     else if (arr[i] === 0){
//       zeroCount += 1
//       limit --
//     }
//   }
 
     
//   let i = limit
//   let a = zeroCount
  
//     //Shift indices to the right, with duplicate zeroes
//      while (i >= 0){

//         //Have condition to make sure limit plus zeroCount is less than arr.length
//         //Shift indicies to the right
//          if (i + a < arr.length){
//           arr[i + zeroCount] = arr[i] 
//          }
         
//          // If the number equals 0, zeroCount is greater than 0 and limit plus zero count is less than or equal to array.length
//          //decrement zeroCount by 1
//          //Add another zero one index left of the previously placed one
//            if (arr[i] === 0 && zeroCount > 0 && (i + a) <= arr.length ){
//              zeroCount -- 
//              arr[i + zeroCount] = arr[i] 
 
//              }
 
//          i--
//      } 
//      console.log(arr) 