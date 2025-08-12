// if

// if(true){
//     console.log("Executed");
    
// }

// if(5==5){
//     console.log("Executed");
    
// }
// if(5=="5"){
//     console.log("Executed");
    
// } //Note: -----> Here It will print Executed but "5" is not equal to 5 in such cases use === which will check value type also

// <,><=,>=,!=,===,==



// if-else these are conditional code there is sure that any one of if or else will be executed



if(false){
    console.log("I will be executed everytime if, if is true");
    
}
else{
    console.log("I will be executed if, if is not true");
    
}

// const match = 600
// if(match>500){
//     let plane = "AirBus"
//     console.log(`This match is Perfect Match with plane ${plane}`);
    
// }
// console.log(`This match is Perfect Match with plane ${plane}`);


// if(2<5)console.log("2 is less than 5") //Implicit scope

// if else ladder

const data = 2000

// if(data>5000){
//     console.log("HurrAAAA");
    
// }else if(data<3000){
//     console.log("That's great");
    
// }else{
//     console.log("Very less");
    
// }


const checkLoggedIn = true
const debitCard = true

if(checkLoggedIn && debitCard){
    console.log("U can access by purchasing");
    
}