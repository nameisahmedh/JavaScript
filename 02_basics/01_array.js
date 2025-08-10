const arr = [1,6.3,"Rahul",false]
const arr2 = new Array(1,6,9,6.5,true)

// console.log(arr);
// console.log(typeof arr);

// console.log(arr2);

// console.log(arr2[1]);
// arr2.push(15);
// console.log(arr2);
arr2.pop()
// console.log(arr2);

arr2.unshift(10) //It will insert at the starting of arr
// console.log(arr2);

arr2.shift() // It will remove at the starting of arr
// console.log(arr2);

// console.log(arr2.includes(2));
// console.log(arr2.indexOf(9));

const newArr = arr2.join() // It will convert the object into String
// console.log(arr2);
// console.log(newArr);
// console.log(typeof arr2);
// console.log(typeof newArr);



// slice, splice
let myArr = new Array(1,6,9,13,4)
console.log("A",myArr);
console.log(myArr.slice(1,3)); // This will wont remove the portion directly from the main arr

console.log("B",myArr);
console.log(myArr.splice(1,3));// This splice will remove the portion in which range is given from including and excluding in the actual array
console.log("This is There in myArr: ",myArr);


