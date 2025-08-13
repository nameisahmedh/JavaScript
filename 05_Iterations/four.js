const app = ["Whatsapp","Chrome","Youtube","VSCode"]

// forEach is an inbuilt function

app.forEach(function (e){
    // console.log(e);
    
})

// app.forEach((e)=>{
    // console.log(e);
    
// })

function printMe(item){
    // console.log(item);
    
}
app.forEach(printMe) // we can do as passing by reference

app.forEach((item,index,arr)=>{
    // console.log(item,index,arr); // forEach consists of item, index,arr

})

const employee = [
    {
        employeename : "Ritesh",
        employeeId : 15
    },
    {
        employeename : "Dravid",
        employeeId : 25
    },
    {
        employeename : "Kiran",
        employeeId : 12
    },
    {
        employeename : "orya",
        employeeId : 17
    }

]
employee.forEach((item)=>{
    console.log(item.employeename);
    
})