function timeConversion(s) {
    let h = s.split(':')[0]
    let m = s.split(':')[1]
    let sec = s.split(':')[2]
     if (s.includes('P')){
       let newHour = parseInt(h) + 12
          if (newHour === 24){
           newHour = 12
          }
       let result = newHour + ':' + m + ':' + sec
       return result.slice(0, 8)
     }
    else if (s.includes('A') && h !== '12')
      return s.slice(0, 8)
    else{
      let newHour = '00'
      let result = newHour + ':' + m + ':' + sec
       return result.slice(0, 8)
    }
  }