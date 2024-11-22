//creating a promise for async await and fetch api

// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("complet!")
//         }, 3500)
//     })
// }


async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    console.log(data)
}


async function main() {
    console.log("Loading data")

    let data = await getData()
    console.log(data)

    console.log("Inserting data..")

    console.log("processing data")
}

main()

// data.then(() => {
//     console.log("Inserting data..")
//     console.log("processing data")
// })
