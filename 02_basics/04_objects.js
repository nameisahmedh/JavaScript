const whatsapp = new Object() // Singleton
// const whatsapp = {} // Non singleton (literal)

whatsapp.name = 'Disouzoe'
whatsapp.id = 1526
whatsapp.pass = "a!956&khh"
// console.log(whatsapp);


const userData = {
    email: "dsousi@aldrio.gmail.com",
    fullname:{
        username:{
            firstname:"aldrioser",
            lastname:"dsousier"
        }
    }
}

// console.log(userData.fullname.username.lastname);



/* The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

Object.assign(target)
Object.assign(target, source1)
Object.assign(target, source1, source2)
Object.assign(target, source1, source2, ....sourceN)*/


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
// const obj3 = {obj1,obj2}
// console.log(obj3); 

// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3); 


const users = [
    {
        id:1,
        email:"rahul@gmail.com"
    },
    {
        id:2,
        email:"rahul2@gmail.com"
    },
    {
        id:3,
        email:"rahul3@gmail.com"
    }
]

// To access array of objects
// console.log(users[1]);
// console.log(users[1].id);
// console.log(users[1].email);


// console.log(whatsapp);

// By using keys and values of object we can use object inside array and can utilise it

// console.log(Object.keys(whatsapp));
// console.log(Object.values(whatsapp));
// console.log(Object.entries(whatsapp));


// console.log(whatsapp.hasOwnProperty('id')); // -----> It is used to check whether the property is present in the object or not

const student = {
    studentname: "Andriew",
    studentId: "18PCV",
    studentDomain: "AI&ML"
}
// console.log(student.studentDomain);

// Object destructuring
// const {studentDomain} = student
// console.log(studentDomain);
const {studentDomain:sD} = student
console.log(sD);

