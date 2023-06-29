const vm = require('vm')
let user = {
    name : "raj",
    email : "raj@gmail.com",
    mobile : "7898878898"
}

console.log("before = ",user)

vm.createContext(user)
vm.runInContext(`name = "Manoj"; email = "manoj@gmail.com" `,user)

console.log('after = ', user)