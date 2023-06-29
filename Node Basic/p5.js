//assert modeule (package) -> exception run time errors handling

const assert = require('assert')

// assert(10 > 12)

const x = [
    {
        name : 'Raju'
    }
]

const y = {
    name:'raju'
}

const z = [
    {
        name : 'Raju'
    }
]

// assert.deepStrictEqual(x,y) // structure, datatype , property name, case of the value

assert.notDeepStrictEqual(x,z) // structure, datatype , property name, case of the value