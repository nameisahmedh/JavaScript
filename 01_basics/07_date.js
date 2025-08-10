// console.log(new Date());
let date = new Date()
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(date.toLocaleTimeString());
// console.log(date.toLocaleDateString());

console.log(typeof date);

// let createdDate = new Date(2025,7,10) // In JS Month satrts from 0 index
let createdDate = new Date("08-03-2004")
console.log(createdDate.toDateString());

let timeStamp = Date.now()
// console.log(timeStamp);
// console.log(createdDate.getTime());
console.log(Math.floor(timeStamp/1000));

console.log(new Date().getFullYear());


const ans = new Date().toLocaleString(
    'default',{
        weekday:"long"   // Use ctrl+space for more options
    }
)
console.log(ans);
