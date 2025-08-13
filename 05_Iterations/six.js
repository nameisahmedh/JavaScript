// map function will return values
// const nums = [1,2,3,4,5,6,7,8,9,10]
// const result = nums.map((num)=>{return num+10})
// console.log(result);

const teamScore = [
    {
        id:1,
        person1Score:54
    },
    {
        id:2,
        person1Score:64
    },
    {
        id:3,
        person1Score:64
    },
    {
        id:4,
        person1Score:24
    },
]

const ScoreAddingFive = teamScore.map((item)=>item.person1Score+5)
// console.log(ScoreAddingFive);


//reduce

const numbers = [1,2,3,4,5]

// const ans = numbers.reduce(function(acc,currVal){
//     return acc+currVal
// },0)
const ans = numbers.reduce((acc,currVal)=>{return acc+currVal},0)

// console.log(ans);

// Chaning using multiple map and reduce continuously


const chainingResult = numbers.map((num)=>(num*10)).map((num)=>(num+1)).filter((num)=>(num>30)).reduce((acc,currVal)=>{return acc+currVal},0);

console.log(chainingResult);
