//var is used in old javascript now we use let and cost
//var can be redeclare anywhere its not stable maximum avoid it

var a = 20
console.log(a)

//redeclaring var
var a = "pranav"
console.log(a)

//let cannot be redeclare , if it is declare we can add more data to it

let b = 5
//adding more data
b = "pranav"

//let also depends on blocks
{
    let c = 5
    console.log(c)
}
//redeclaring it out of block
let c = "Yadav"
console.log(c)
