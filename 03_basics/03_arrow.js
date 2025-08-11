const user = {
    name:"Rahul",
    id:1596,
    greetings: function(){
        // this is used to refer current contex inside the objects
        console.log(`This is user ${this.name}`);
        // console.log(this);
        
    }
    
}
// user.greetings()
// user.name = "Sahuul"
// user.greetings()
// console.log(this);


// function biscket(){
//     let biccy = "Mario"
//     console.log(this.biccy); // this cannot be accessed in the function it is done in objects only so it results in undefined
    
// }
// biscket()


// const biscket = function(){
//     let biccy = "Mario"
//     console.log(this.biccy); // this cannot be accessed in the function it is done in objects only so it results in undefined
// }
// biscket()




const biscket = () =>{
    let biscket = "GoodDay"
    console.log(this);
    
}

biscket()


// Arrow Function

// Basic Arrow function / explict return
// const addNum = (num1,num2) =>{
//     return num1+num2
// }


// Implicit return arrow function
// const addNum = (num1,num2) => num1+num2
// const addNum = (num1,num2) => (num1+num2)
const addNum = (num1,num2) => ({username:15})

console.log(addNum(59,16))
