const fruits = ["banana","apple","grapes"]

const vegetables = ["tomato","potato","brinjal"]

// fruits.push(vegetables) // push appends new elements,or array at the end the array

// console.log(fruits[3][2]);

const afterConcat = fruits.concat(vegetables)
// Concat is use to combine array without modifying actual array returns new array
console.log(afterConcat);

const all_eatables = [...fruits,...vegetables]
// Similar to Concat
console.log(all_eatables);
console.log(typeof all_eatables);


const another_array = [1,2,3,[4,5,[6,7]],[8,12],10]
// If you want to print the elements without following any depth just to retrieve values then use flat

const real_another_array = another_array.flat(Infinity) // This flat(depth to go... Infinity will go totally without manual declaration)
console.log(real_another_array);

const numvar = "156da"
console.log(Array.isArray("Ahmed"));
console.log(Array.from("Ahmed"));
console.log(Array.from(numvar));

console.log(Array.from({name:"Ahmed"})); // As it will cannot recognise what to convert key or value, so it will return [] asked in interviews

let s1 = 200
let s2 = 400
let s3 = 600

console.log(Array.of(s1,s2,s3));

