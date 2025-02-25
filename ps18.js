// একটি ফাংশন লিখুন যা দুটি সংখ্যা নেবে এবং একটি কলব্যাক ফাংশন ব্যবহার করে সেই দুই সংখ্যার গুণফল দেখাবে।
function callBack(a,b){
    console.log(a*b)
}
function disPlay(x,y,bringFunction){
    bringFunction(x,y)

}
disPlay(2,3,callBack)
