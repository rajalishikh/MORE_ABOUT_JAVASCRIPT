let array_q=[12,33,66,99]
let n=[...array_q]
array_q.push(22)
n.push(8888)
console.log(array_q)
console.log(n)

// practice 
let item = ["Egg", 0.25, 12];
let [a,x]=item
console.log(a,x)
// practice 2

let numbers = [3, 5, 4, 2, 6, 1];

let [one,two,three,four]=numbers
console.log(one,two,three)

// practice 4
let user = { name1: "John", years: 30 };
let{name1,years}=user;
console.log(name1,years)

let num=[1,2,3,6,7,8]
let [ol,...m]=num
console.log(m)