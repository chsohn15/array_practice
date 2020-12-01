function list(names){
    let nameStr = ""
    if(names.length === 1){
      return names[0].name
    } else if(names.length === 0){
      return names[1].name
    }
    for(let i = 0; i < names.length -2; i++){
      nameStr += names[i].name + ", "
    }
    nameStr += names[names.length -2].name + " & " + names[names.length -1].name
  
    return(nameStr)
  }
  

  list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])