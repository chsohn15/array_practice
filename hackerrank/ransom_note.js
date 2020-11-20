let magazine = "give me one grand today night"
let note = "give one grand today"


function checkMagazine(magazine, note) {

if(note.length > magazine.length)return 'No'

let obj = {}

for(let letter of magazine){
  obj[letter] ? obj[letter]+=1 : obj[letter] =1 
}


for(let letter of note){
  if(obj[letter]){
    if(obj[letter]>=1)obj[letter]-= 1
    else return 'No'
  }
  else return 'No'
}
return 'Yes'
}

checkMagazine(magazine, note)