function tell_joke(){
    console.log("why don't scientist trust atom?because they make up eery thing")
}
const jokeInterval=setInterval(()=>{
    tell_joke()
},2000)
setTimeout(()=>{
    clearInterval(jokeInterval)
},10000)