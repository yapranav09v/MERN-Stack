//arrays in javascript can store multiple types of values

let marks = [95, 91, 34, null, false, "Not"]

console.log(marks)
console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[6])

//find length
console.log("The length of mark's is : ",marks.length)

//adding and replacing a value
marks[2] = 93
console.log(marks[2])
console.log(typeof marks)

//printing the array using a loop
for(let i = 0;i<marks.length;i++){
    console.log("Array elements of marks are: ",marks[i])
}