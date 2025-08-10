const name = "Verlino Disosa "
const age = 59
const work = "Extraodinary"
console.log(name+age+work);


console.log(`Name is ${name},with age ${age} with ${work} work doing`);

const userName = new String('Hakunnama Tata')
console.log(userName);
// console.log(typeof(userName)); // -> Its object as it is stored in Key Value Pairs
// console.log(userName[1])

// console.log(userName.__proto__);

// const newString = userName.substring(0,5)
// console.log(newString);

// const anotherString = userName.slice(-9,10)
// console.log(anotherString);

const superman = "   Am I Super MAN   "
console.log(superman.trim());
console.log(superman.trimStart());
console.log(superman.trimEnd());

const url = "https://ahmedCoding.com%Javascript%basics%strings.js"

console.log(url.replace("%","-"));
console.log(url.replaceAll("%","-"));

console.log(url.includes('ahmed'));

console.log(superman.split(" "));









