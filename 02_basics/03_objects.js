// singleton
// Object.create()


// object literals

const mySym = Symbol("key1")
const user = {
    name: "Andriew",
    "full name": "Amale Andriew Disosa",
    age: 21,
    [mySym]:"mykey", // Note: To declare a symbol use bracket when u are try to print total user in console it will take it as Symbol with using brackets it will take it as a string
    location: "Hyderabad",
    email: "ahmed12389@gmail.com",
    isActive: true,
    lastPayDays : ["WednesDay","Friday"]
}

// console.log(user.email);
// console.log(user["email"]); 
// console.log(user["full name"]);
// console.log(user[mySym]);


user.email = "abcxyz@google.com"
// console.log(user);
// Object.freeze(user) // It is used to freeze the values

// user.email = "abcxyz@chatbot.com"
// console.log(user);

user.greetings = function(){
    console.log("Hello India");
    
}
console.log(user.greetings); // It will return a function ananymous ----> The function which is not executed is a function ananymous 

console.log(user.greetings()); // ----> it will return Hello India

user.greetings2 = function(){
    console.log(`Congratulations ${this["full name"]} on completing successfully objects first part`);

    // Here this is use to reference the same object and it will return the properties of that object by using this .
}

console.log(user.greetings2());




