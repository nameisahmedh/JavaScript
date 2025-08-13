const app = ["Whatsapp","Chrome","Youtube","VSCode"]


// const ans = app.forEach((item)=>{
//     // console.log(item);
//     return item
    
// })
// console.log(ans);   // forEach doesn't return anything



const numbers = [1,2,3,4,5,6,7,8,9,10]

// const res = numbers.filter((num)=>(num>4))
const res = numbers.filter((num)=>num>4) //  if used ()=>{} this format dont forget to return (n)=>{return n>4}


console.log(res); // filter can return values based on filter applied



const newNums = []

numbers.forEach((item)=>{
    if(item>4){
        newNums.push(item)
    }
})
console.log(newNums);




const users = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice.j@example.com',
    isActive: true,
    department: 'Engineering'
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    isActive: false,
    department: 'Marketing'
  },
  {
    id: 3,
    name: 'Catherine Williams',
    email: 'c.williams@example.com',
    isActive: true,
    department: 'Engineering'
  },
  {
    id: 4,
    name: 'David Brown',
    email: 'd.brown@example.com',
    isActive: true,
    department: 'Sales'
  }
];

const engineer = users.filter((user)=>user.department === "Engineering")

console.log(engineer);
