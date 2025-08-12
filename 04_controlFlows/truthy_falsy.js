//  const user = "Sarthak"

//  if(user){
//     console.log("This is executed if true");
//  }else{
//     console.log("This is executed if, if is not true");  
//  }

// falsy values
// false,0,-0,BigInt 0n,"",null,undefined,NaN

// truthy values
// "0",'false'," ",[],{},function(){}

     
//  const arr = []
//  if(arr.length==0){
//     console.log("Array is Empty");
    
//  }else{
//     console.log("Array has some elements");
    
//  }

//  const obj = {}
//  if(Object.key(obj).length==0){
//     console.log("obj is Empty");
    
//  }else{
//     console.log("Obj has some elements");
    
//  }


// Nullish Coalescing Operator (??): null undefined

// let val1 = 5 ?? 10
// console.log(val1);

// let val1 = null ?? 10
// console.log(val1); ----> Output 10


// let val1 = 7 ?? undefined
// console.log(val1);


let val1 = null ?? 10 ?? 20
console.log(val1);


// Terinary Operator

// condition   ? true : false

const age = 18
age>=18 ? console.log("You can take vote"):console.log("You are not eligible to Vote");
;
