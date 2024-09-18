//for loops in javascript

for(let i =0; i<6; i++){
    console.log(i)
}

let a = 10
let sum =0
for(let i =0; i<a; i++){
    sum += i;
}
console.log(sum)

//for in loop

const person ={
    name: 'John',
    age: 30,
    city: 'New York'
}

//for in loop to retrive objects in iterative
for(let i in person){
    console.log(i)
    console.log(person[i])
}

//for of used in iterative we can see more of in arrays and strings
for(let a of "pranav")
{
    console.log(a)
}