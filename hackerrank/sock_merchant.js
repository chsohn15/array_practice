function sockMerchant(n, ar) {
    let h = {}
      let pairs = 0
      for (let num of ar){
        h[num] ? h[num]++ : h[num] = 1
      }
      for (let key in h){
        if (h[key] >= 2){
          pairs += Math.floor(h[key]/2)
        }
      }
      return pairs
    }