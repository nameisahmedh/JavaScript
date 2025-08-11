// function mySchool(){
//     console.log("S");
//     console.log("C");
//     console.log("H");
//     console.log("O");
//     console.log("O");
//     console.log("L");
    
// }
// mySchool -> function reference
// mySchool() // -> function execution



// function add(a,b){ // parameter
//     console.log(a+b); 
// }
// const result = add(5,-2) // arguments
// console.log(result); ----> here the result print 8 undefined because as it is not retured anything we cannot assign it to result 

function add(a,b){ // parameter
    return a+b;
}
console.log(add(5,6)); // arguments

function greeting(username){
    if(!username){ // (username===undefined)
        console.log("Please enter a username");
        return
    }
    return `${username} Welcome to Google`
}

// console.log(greeting("Andriew"));
console.log(greeting());


