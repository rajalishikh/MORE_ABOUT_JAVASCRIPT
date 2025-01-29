let num=[1,5,7,8,9,6,8]
let sum=num.reduce((pre,cur)=>pre+cur,0)
console.log(sum)
// practice question 
let new_num =[4,7,8,9,5,7]
let x=new_num.reduce((pre,cur)=>{
    let total=pre*cur
    return total
},1)
console.log(x)