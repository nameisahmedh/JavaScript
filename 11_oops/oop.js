const user = {
    username: " Ahmed",
    userid : 142,
    signIn : true,
    getUserDetails : function(){
        console.log(`The username is ${this.username} with id as ${this.userid}`);
        
    }
}

console.log(user);
console.log(user.username);

user.getUserDetails()


function User(username,userid,signIn){
    this.username = username,
    this.userid = userid,
    this.signIn = signIn
    // return this // We can remove this when we are using new as an object creation as it implicitly returns the value , so we no need to return again
}
// const userData = User('Alex',128,true)
// userData.cryto = "alc" // we can access object properties and can modify it
// // const userData2 = User('Atlif',451,false)  // It will totally modify the existing Data 
// console.log(userData);


const userData = new User('Alex',128,true)

const userData2 = new User('Atlif',451,false)  
console.log(userData);
console.log(userData2);

// whenever we use a new an empty object is created which is called instance
// new object is created
// constructor functioncall through new keyword
// arguments are injected in this keyword

console.log(userData.constructor);
console.log(userData instanceof User);




