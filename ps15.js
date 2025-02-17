// একটি প্রোগ্রাম লিখুন যেখানে একটি ভেরিয়েবল marks-এর মান দেওয়া হবে।যদি marks ৮০ বা তার বেশি হয়, তাহলে কনসোলে প্রিন্ট করুন: "You passed with distinction."যদি marks ৬০ বা তার বেশি হয়, তাহলে কনসোলে প্রিন্ট করুন: "You passed with first division.যদি marks ৪০ বা তার বেশি হয়, তাহলে কনসোলে প্রিন্ট করুন: "You passed." যদি marks ৪০-এর কম হয়, তাহলে কনসোলে প্রিন্ট করুন: "You failed." হিন্ট: শুধু if ব্যবহার করে এই কন্ডিশনগুলি চেক করুন।
const prompt = require('prompt-sync')();
let userMark=prompt("Please Enter your mark:")
if(userMark>= 80){
    console.log("You passed with distinction")

}
if(userMark >=60){
    console.log("You passed with first division")
}
if(userMark >=40){
    console.log("You passed")
}if(userMark<40){
    console.log("You are fail")
}

