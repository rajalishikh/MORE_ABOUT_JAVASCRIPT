// 1b) Write a function called delayedGreeting() that takes two parameters, name and delay time, and logs a greeting message after the given delay time.
// Input:
// delayGreeting(‘Alice’, 2000)
// Output:
// Hello, Alice!

function delayedGreeting(name,delay_time){
    let a=setTimeout(()=>{
        console.log(`Hello ${name}!`)

    },delay_time)
    return a

}
const output=delayedGreeting('raj',2000)