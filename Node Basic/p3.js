//import numbers from './content/numbers'

//Warning: To load an ES module, set "type": "module" in the package

//require(path) => to import files
const names = require('./content/names')

console.log('user1 = ', names.user1)
console.log('user2 = ', names.user2)
console.log('user3 = ', names.user3)

const numbers = require('./content/numbers')

let result = numbers.x * numbers.y * numbers.z
console.log('product =', result)
