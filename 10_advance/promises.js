// promise 
// A Promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. It allows you to write asynchronous code that looks and behaves more like synchronous code, making it easier to read and manage.

// How Promises Work
// A Promise can be in one of three states:

// pending: The initial state. The asynchronous operation has started but has not yet completed.

// fulfilled (or resolved): The operation completed successfully. The Promise now holds the resulting value.

// rejected: The operation failed. The Promise now holds a reason for the failure (an error object).

// Once a Promise is either fulfilled or rejected, it is considered settled. A settled Promise cannot change its state again.

// Key Methods
// You can handle the outcome of a Promise using these methods:

// .then(): This method is used to handle a fulfilled Promise. It takes a callback function that receives the resolved value as an argument.

// .catch(): This method is used to handle a rejected Promise. It takes a callback function that receives the reason for the rejection (the error) as an argument.

// .finally(): This method is used to execute code regardless of whether the Promise was fulfilled or rejected. It's useful for cleanup tasks.

const promise1 = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, cryptography,network
    setTimeout(() => {
        resolve() // this will perform after the setTimeout only
        console.log('Async task is completed');
    }, 1000);
})

promise1.then(function(){
    console.log('Promise consumed');
    
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2 ');
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 resolved');
    
})



const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Rahul",email : "sonu@example.com"})
    },1000)
})

promise3.then(function(e){
    console.log(e);
    
})


const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:{
                firstname : "MD",
                lastname : "Ahmed"
            } ,pass:"123"})
        }else{
            reject('ERROR: Something Went Wrong')
        }
    },1000)
})


promise4.then(function(user){
    console.log(user);
    return user.username
}).then(function(username){
    console.log(username);
    return username.firstname
    
}).then(function(firstname){
    console.log(firstname);
    
}).catch(function(error){
    console.log(error);
    
}).finally(function(){ // this finally is executed always irrespective of resolved or rejected
    console.log('The chain is ended');
    
})


const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({coursename:"JS mastery",pass:"123"})
        }else{
            reject('ERROR: Something Went Wrong')
        }
    },1000)
})

async function consumePromise5(){
   try{
    const res =  await promise5
    console.log(res);
   }catch(error){
    console.log(error);
    
   }
   
}

consumePromise5()


// async function getData(){
//     try {
//         const response = await fetch('https://jsonplaceholder.org/users')
//         // console.log(response);
        
//         // const data =  response.json() ----> This wont give you outpu as it need some time so we need to use await
//         const data = await response.json()
//         console.log(data);
        
        
//     } catch (error) {
//         console.log("E: ",error);
        
//     }
    
// }
// getData()

fetch('https://jsonplaceholder.org/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
    
}).catch((error)=>{
    console.log(error);
    
})
