console.log(1)
console.log(2)
setTimeout(()=>{
    console.log(3)
},3000)
console.log(4)
console.log(5)
console.log(6)
let num=0
const setId= setInterval(()=>{
    num++
    console.log(num)
    if(num >6){
        clearInterval(setId)

    }

},2000)
