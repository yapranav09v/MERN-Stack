//there are two types of data types in javascript 
//--primitive and objects
//trick to rember NN SS BB U
//null number string symbol boolean bigint undefined

let a = 45
let b = null
let c = "pranav"
let d =Symbol("my symbol")
let e = true
let f = BigInt(45)
let g = undefined

console.log(a, b, c, d, e, f, g)

//we can see type using typeof
console.log(typeof f)

//objects
//objects are collection of key value pairs
//key is always string and value can be any data type

let anything = {
    "name" : "pranav",
    "age"  : 20,
    "emotions": null
}

console.log(anything["name"])
console.log(anything["emotions"])
