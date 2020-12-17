function timeInWords(h, m) {
    let small = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let minutes
    let inner
    let hour = small[h]
    if (m === 0) {
        hour = "o' clock"
        minutes = small[h]
        inner = ''
        return minutes + ' ' + hour
    }
    if (m < 30){
        hour = small[h]
        inner = 'minutes past'
        if (m === 1){
            inner = 'minute past'
        }
        if (m === 15) {
            minutes = 'quarter'
            inner = 'past'
        }
        else if (m < 20) minutes = small[m]
        else if (m > 20) minutes = 'twenty ' + small[m%10]
        else if (m === 20) minutes = 'twenty'
    }else if (m === 30){
        inner = 'past'
        minutes = 'half'
    }else{
        inner = 'minutes to'
        hour = small[h+1]
        if (m === 45) 
        {
            minutes = 'quarter'
            inner = 'to'
        }
        else{
            m = 60 - m
            if (m > 20) minutes = 'twenty ' + small[m%10]
            else minutes = small[m]
            if (m === 20) minutes = 'twenty'
        }
    }
    return minutes + ' ' + inner + ' ' + hour
    }