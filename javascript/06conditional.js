//conditional statements in javascript
let age = prompt("whats your age: ")
age = Number.parseInt(age) //convert the string to number

if(age<0){
    alert("invalid age");
}
else if(age<9){
    console.log("you are just a kid");
}
else if(age<18 && age>9){
    console.log("You can think of driving after a valid age")
}
else{
    console.log("You can drive")
}

//because of prompt this code with run in browser
//there are also a switch statements in js like c++

//epression by tertinary opetor as conditional
console.log("You can ", (age<18? "not drive" : "drive"))

