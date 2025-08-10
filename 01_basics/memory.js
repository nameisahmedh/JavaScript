// Stack (Primiive), Heap (Non_Premitive)


// See in Primitives it is stored in Variales as a copy 
let userName1 = "Arnaodo Ukazime"

let userName2 = userName1
userName2 = "Vertulandiso Siyra"

console.log(userName1)
console.log(userName2)

// See as in Non Primitivites it is stored in Heap it will referenced , by referencing it is modifying the whole previous heap memory
let user1 = {
    email:"thisisuserone@email.com",
    age:45
}
let user2 = user1
user2.email = "thisisChanges@email.com"
console.log(user1.email);
console.log(user2.email);


