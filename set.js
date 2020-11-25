let mySet = new Set()

mySet.add(1)
mySet = [1, 2, 3]

console.log(mySet)

let a = [1, 1, 2, 2]

let set2 = new Set(a)

console.log(set2)

set2.delete(1)

console.log(set2)

const t = new Set()
let b = [1, 2, 3]
for(let num of b){
   t.add(num)
}

t.add({'a': 1, 'b': 2})
console.log(t)

const c = [1, 1, 2, 3, 3]
let newA = [...new Set(c)]

console.log(newA)

