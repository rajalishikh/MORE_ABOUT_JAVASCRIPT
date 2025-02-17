// Declare an array with 5 numbers, print the first and last elements, and print the array's length.
let num_Array=[11,33,44,55,66,77]
// console.log(num_Array[0],num_Array[5])
// console.log(num_Array.length)
num_Array[1]=22
// console.log(num_Array)
// 2 Use push() to add at the end, pop() to remove the last, unshift() to add at the beginning, and shift() to remove the first element of the array.
num_Array.push(33)
// c

let x=num_Array.map(i=>i%2 ===0)
// console.log(x)

// console.log(num_Array.indexOf(44))
num_Array.splice(1,3,"Mango","Apple","Banana")
// console.log(num_Array)
let newArray=[1,2,3,5,6,7,8,9]
let num=newArray.reduce((x,y)=>{return x+y},0)
console.log(num)