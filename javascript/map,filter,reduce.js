//using maps returns new array take three agruments values, index, array

let a =[3, 4, 3, 2, 5]

a.map(
    (value, index, array)=>{
        console.log(value, index, array)
    }
)

//using filter method to filter values,it does not modify original array

let b = a.filter(
    (val)=>{
        return val > 3
    }
)
console.log(b)

//reduce is used to reduce array into single value ,it adds 1 and 2 value with 3 value
let rd = a.reduce((h1, h2)=>{
    return h1 + h2;
})
console.log("The reduced array: ", rd)