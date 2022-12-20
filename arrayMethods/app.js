const scores = [10,30, 15, 25, 50, 40, 5]

// const filteredScores = scores.filter((score) => {
//     return score > 20;
// });

// console.log(scores);
// console.log(filteredScores);

const users = [
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true}
];

//get an array of premius users using the filter() method
const premiumUsers = users.filter((user) => {
    return user.premium === true
})

console.log(premiumUsers);