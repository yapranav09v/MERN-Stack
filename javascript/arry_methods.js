//array methods in javascript

let myarr = [1, 3, 2, 4, 5]

//converting to string
console.log(myarr.toString())

//it joins elemetns of array and we can do formating according to our concern
let c = myarr.join("-")
console.log(c);

//pop method pops last element from array and can return pop value it directally modufies main array
let p = myarr.pop();
console.log(p);
console.log(myarr)

//pushing and adding new element it adds at back side return's new lenth of array
let a = myarr.push(6);

console.log(myarr)


//remove first element
console.log(myarr.shift());

//adds new element at start
let b = myarr.unshift(8)

console.log(myarr)

