//using clasical for loop first
let myarr  = [1, 3, 2, 4, 5]

for(let i=0;i<myarr.length;i++){
    console.log(myarr[i]);
}

//using for each loop direct ot myarr
myarr.forEach((element)=>{
    console.log(element*element)
})

//arrray conversion
let  s = "Pranav"
let arr=Array.from(s)
console.log(arr)

//for of loop
for(let i  of myarr){
    console.log(i) //prefered  loop
}

//for in loop return keys if its only i
for(i in myarr){
    console.log(i) //returning keys ,
}
//we need to use myarr[i]
console.log('like: ')
for(i in myarr){
    console.log(myarr[i])
}