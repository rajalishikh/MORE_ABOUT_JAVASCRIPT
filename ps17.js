// In this challenge, we practice declaring variables using the let and const keywords. Check out the attached tutorial for more details.// Task/Declare a constant variable, // , and assign it the value Math.PI. You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).// Read a number,// , denoting the radius of a circle from stdin.// Use// and to calculate the and of a circle having radius// .// Print// as the first line of output and print as the second line of output.
function main(){
    const readline = require('readline-sync');
    const PI=Math.PI
    console.log(PI)
    let r=readline.questionFloat("Please Enter radius value: ");
    let Area=PI*r*r;
    
    let Circumference=2*PI*r
    console.log(Area)
    console.log(Circumference)

}
main()