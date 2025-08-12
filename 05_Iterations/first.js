// for

for (let i = 1; i <=10 ; i++) {
    console.log(i);
      
}

// for(var_type initialisation;condition;incre/decre){}

for (let i = 1; i <=10; i++) {
    console.log(`The Table is ${i}`);
    for (let j = 1; j <=10; j++) {
        console.log(`${i} X ${j} = ${i*j}`);  
    }
     
}


// Using break
console.log("Using Break");

for (let i = 0; i < 10; i++) {
    if(i==5)break
    console.log(i);
      
}
// Using continue
console.log("Using Continue");

for (let i = 0; i < 10; i++) {
    if(i==6)continue
    console.log(i);
    
    
}