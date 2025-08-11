// var z = 300
let x = 500 // global scope
if(1){ // block scope
    let x = 10
    const y = 2
    // var z = 5 // It will declare globally
}

// console.log(x);
// console.log(y);
// console.log(z);


//nested function

function outer(){
    const name = "David"
    function inner(){
        const user = "Catrin"
        // console.log(name); // David    as it is in the inner so it can access the parent properties too
        
    }
    inner()
    // console.log(user); ----> as user inside inner it is in its block scope
}
outer()



// console.log(addOne(12)) // We can use before declaration
function addOne(num){
    return num+1
}


// console.log(addTwo(52)) // It will make an error in this type of function usage we cannot use before as function is assigned to someone
const addTwo = function(num){
    return num+2
}
