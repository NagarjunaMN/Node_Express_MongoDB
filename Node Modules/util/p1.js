const util = require('util')

//template 

let myTemplate = `hi %s, welcome to %s and duration of this course is %d months`;

let u1 = util.format(myTemplate,"Ram","Node Js",1.4)
let u2 = util.format(myTemplate,"Raju","React Js",1.2)

console.log('user 1 = ', u1)
console.log('user 2 = ', u2)