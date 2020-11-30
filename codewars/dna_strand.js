function DNAStrand(dna){
    dna = dna.split("")
    dna = dna.map(letter => {
    switch(letter){
      case "C":
      letter = "G"
      break
      case "G":
      letter = "C"
         break
      case "A":
      letter = "T"
         break
      case "T":
      letter = "A"
         break
    } 
    return letter
  })
return dna.join("")
}