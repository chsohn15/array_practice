function bunnyEars2(bunnies) {
    if(bunnies === 0){
      return 0
    }
    if(bunnies === 1) {
      return 2;
    }
    let ears = 0
    if(bunnies % 2 === 0){
      ears = 3;
    }else {
      ears = 2;
    }
    return ears + bunnyEars2(bunnies - 1);
  }
  
  console.log(bunnyEars2(0)) //0
  console.log(bunnyEars2(1)) //2
  console.log(bunnyEars2(2)) //5
  console.log(bunnyEars2(3)) //7
  console.log(bunnyEars2(4)) //10
  console.log(bunnyEars2(5)) //12
  console.log(bunnyEars2(10)) //25