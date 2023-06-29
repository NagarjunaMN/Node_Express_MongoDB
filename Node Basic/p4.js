const methods = require('./content/methods')
const numbers = require('./content/numbers')
const names = require('./content/names')

methods.sayHi(names.user1)
methods.sayHi(names.user2)
methods.sayHi(names.user3)

console.log("Sum = ",methods.sum(numbers.x,numbers.y,numbers.z))