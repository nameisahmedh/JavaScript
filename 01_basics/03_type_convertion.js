// let str_age = "12abc" -> NaN
// let str_age = null -> 0
// let str_age = true -> true:1;false:0
// let str_age = Boolean -> NaN
let str_age = "12"


console.log(typeof(str_age));

let val_age = Number(str_age)

console.log(typeof val_age);
console.log(val_age);



