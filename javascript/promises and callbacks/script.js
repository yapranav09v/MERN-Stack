//creating a simple callback fuction 

console.log("first")

setTimeout(()=>{
  console.log("in time")
}, 2000)

const callback = (arg)=>{
    console.log(arg)
}

const loadscript = (src, callback)=>{
    let sc = document.createElement("script")
    sc.src = src
    sc.onload = callback("Pranav")
}

loadscript("https://www.google.com/search?q=prism+react+sripts+src&sca_esv=396436077eb24e00&rlz=1C1ONGR_enIN1013IN1013&sxsrf=ADLYWIIMozP0rStGyPHKdjMg1bwkfwXnXQ%3A1732292406471&ei=Nq9AZ4qnHOmKxc8Ps6_s8Qc&ved=0ahUKEwiKmqOMrPCJAxVpRfEDHbMXO34Q4dUDCA8&uact=5&oq=prism+react+sripts+src&gs_lp=Egxnd3Mtd2l6LXNlcnAiFnByaXNtIHJlYWN0IHNyaXB0cyBzcmMyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEdI9ghQxQVYxQVwAXgBkAEAmAEAoAEAqgEAuAEDyAEA-AEBmAIBoAIGmAMA4gMFEgExIECIBgGQBgiSBwExoAcA&sclient=gws-wiz-serp", callback)

console.log("last")