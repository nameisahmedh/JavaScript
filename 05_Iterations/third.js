// for loop using array

const fruits = ["Apple",true,"Cherry"]

for (let i = 0; i < fruits.length; i++) {
    const element = fruits[i];
    // console.log(element);
    
}

// for of
// ["","",""]
// [{},{},{}]


const stationary = ["Pen","Pencil","Eraser","Book"]

for (const item of stationary) {
    // console.log(item);
    
}

const name = "Super Star"
let star = ''
for (const i of name) {
    star+=i
    
}
// console.log(star.trim());



// Map ----> It is a Object
const map = new Map()

map.set("Id:1","Rahul")
map.set("Id:2","Katrin")
map.set("Id:3","Charli")

// console.log(map);


for (const [key,value] of map) {
    // console.log(key,": ",value);
    
}

// Object

const user = {
    name:"David",
    salary:15000
}

// for (const [key,value] of user) {
    // console.log(key,": ",value);
    
// } // It shows error as Object is not iterable from forof


// for in

for (const key in user) {
    console.log(`This is key: ${key} and value is : ${user[key]}`);
    
}


for (const key in stationary) {
    console.log(key); // It will return only key index as 0 1 2 3
    
}

for (const key in map) {
    // console.log(key); // Maps are not iterable using for in
    
}