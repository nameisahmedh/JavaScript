// var z = 300
let x = 500 // global scope
if(1){ // block scope
    let x = 10
    const y = 2
    // var z = 5 // It will declare globally
}

console.log(x);
// console.log(y);
// console.log(z);