let height = [1, 2, 3, 3, 2]
let k = 7

function hurdleRace(k, height) {
  let hurdle = Math.max(...height)
  if(k > hurdle){
    return 0
  } else {
    return hurdle- k
  }
}

console.log(hurdleRace(k, height))