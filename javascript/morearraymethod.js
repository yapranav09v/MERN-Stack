//delete used to delet element from array
//it does not change length of the array

num1 = [5, 1, 2, 3, 4, 6]
num2 = [11, 12, 13, 14, 15, 16]
num3 = [12, 22, 23, 24, 25, 26]

delete num1[0]
console.log(num1, num1.length)

//we can concate more than 1 array
newarr = num1.concat(num2, num3)
console.log(newarr, newarr.length)

//we can sort array using sort but it sorts only by first element of number
num1.sort()
console.log(num1)

//using compare fun to sort accordingaly

let compare=(a, b)=>{
    //return a - b for ascending
    return b - a; //for decending
}

num1.sort(compare)
console.log(num1)

//reverse , reverses the array
console.log(num1.reverse())

//splice used to add new element and give and index according, and to delet the elements
let deleted=num1.splice(2,3, 45,67,89)
console.log(num1)

//modify array it is a object returns deleted elements
console.log(deleted)

//slice is used to slice an array and return a new array
let marr = [ 2, 3, 4, 5,8]
let lnew =marr.slice(3)
let lnewr = marr.slice(2, 4) 
console.log(lnew)
