let name = "Ahmed"
let age = 21
let isDeveloper = true
let isActive
let isWorking = null

//--->Premitive Types
//number (integer+floating)
//bigint (number larger than (2^53-1) and less than -(2^53-1))
//String
//Boolean
//null
//undefined
//symbol (for unique identities)

//--->Non-Premitive Types
//object (for complex data Structures)

console.table([name,age,isDeveloper,isActive,isWorking])

console.log(typeof isActive) // undefined
console.log(typeof isWorking) // -> null is a object