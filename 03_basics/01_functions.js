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
// console.log(add(5,6)); // arguments

function greeting(username){
    if(!username){ // (username===undefined)
        console.log("Please enter a username");
        return
    }
    return `${username} Welcome to Google`
}

// console.log(greeting("Andriew"));
// console.log(greeting());



function calculateSum(...num1){ // Here ... is called as rest and spread operator according to the situation we use it as rest or spread this ... used to return the value in the new array 
    return num1
}

console.log(calculateSum(500,200,600,1000)); // Here we will be passing multiple values

const course = {
    coursename: "JS Master",
    price:1299
}

function couseObj(anyObj){
    return `The Couse name is ${anyObj.coursename} and the price is ${anyObj.price} rupees`
}
// console.log(couseObj(course));
console.log(couseObj({
    coursename:"DSA Master",price:4999
})); //----> We can directly pass object to the function


const score = [500,800,1200]

function getSecondVal(getVal){
    return score[1];
}
console.log(getSecondVal(score));


