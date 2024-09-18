//string methods in javascript
let myname = "pranav"

console.log(myname.length)

console.log(myname.toUpperCase());
console.log(myname.toLowerCase());

//index 2 to further string get printed
console.log(myname.slice(2))

//index 2 to n-1 get printed
console.log(myname.slice(2,4))

//replace the charecter
rep = myname.replace("p", "A")
console.log(rep)

let friend1 = "Harry"
let friend2 = "        friend         "

//concatination of strings
console.log(myname.concat("is a friend", friend1))

//trimming of strings
console.log(friend2.trim())
for(let i=0;i<friend1.length;i++){
    console.log(friend1[i])
}