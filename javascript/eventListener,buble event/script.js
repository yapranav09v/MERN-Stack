let button = document.getElementById("btn")
button.addEventListener("click", ()=>{
    alert("hey click me again")
    let div = "<h1>Your data has been submited</h1>"
    document.querySelector('.container').innerHTML = "<h1>Your data has been submited</h1>"
})
