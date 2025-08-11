 // Immediately Invoked Function Expressions (IIFE)

//  function greeting(){
//     console.log(`Welcome to Code`);
    
//  }greeting()

// ()()

 (function greeting(){
    // named IIFI
    console.log(`Welcome to Code`)
    
 })(); // Run the function immediately , and use semi colon

/* Key Benefits of Using an IIFE
1. Avoids Global Scope Pollution 🌍
The biggest reason to use an IIFE is to keep your variables out of the global namespace. In a browser, any variable declared with var in the outermost scope becomes a property of the window object.

Without an IIFE:

JavaScript

var message = "Hello from global scope!";
var score = 99;

console.log(window.message); // "Hello from global scope!"
// 'message' and 'score' are now global and can be accidentally overwritten by other scripts.
With an IIFE:

JavaScript

(function() {
  var message = "Hello from inside the IIFE!";
  var score = 100;
  // 'message' and 'score' only exist inside this function.
  
  console.log(message); // "Hello from inside the IIFE!"
})();

console.log(typeof message); // "undefined"
console.log(typeof window.message); // "undefined"
// The global scope remains clean! */

(()=>{
    // no named IIFI
    console.log("DataBase Connected");
    
})();

// If U are Using multiple IIFE at a time u need to sepearte it by using semicolon ; to recognise where it need to stop ()(); ()()


((name)=>{
    // no named IIFI with parameters
    console.log(`This is Name ${name}`);
    
})("Ariff")