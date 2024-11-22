//creating a simple promise function of resolve and reject

console.log("This is promise")

let prom1 = new Promise((resolve, reject) => {

    let a = Math.random()
    if (a < 0.3) {
        reject("NO random number was supporting")
    } else {
        setTimeout(() => {
            console.log("i am done")
            resolve("Promise 1 resolved")
        }, 2000)
    }

})

let prom2 = new Promise((resolve, reject) => {

    let a = Math.random()
    if (a < 0.3) {
        reject("NO random number was supporting")
    } else {
        setTimeout(() => {
            console.log("i am done too")
            resolve("Promise 2 resolved")
        }, 2000)
    }

})

let prom = Promise.all([prom1, prom2])
prom.then((arg)=>{
    console.log(arg)
}).catch((err)=>{
    console.log(err)
})